using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Extensions;
using Flight2Orbit.Models;
using Flight2Orbit.Models.Inventory;
using Flight2Orbit.Models.Quiz;
using Flight2Orbit.Models.Shared;
using Flight2Orbit.Models.Tracker;
using Microsoft.AspNet.SignalR.Hubs;
using Umbraco.Core;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using ParagraphDTO = Flight2Orbit.Models.ParagraphDTO;

namespace Flight2Orbit.Helpers
{
    public class Mapper
    {
        public HomeDTO Map(Home node)
        {
            if (node.Sections == null) throw new NotFoundException("Sections cannot be null");
            var sections = new List<SectionDTO>();
            foreach (var sectionPC in node.Sections)
            {
                var section = Converters.ConvertPublishedContent<Section>(sectionPC);
                sections.Add(new SectionDTO(section.Header, section.Description, section.Image.Url(), new ButtonDTO(section.ButtonText, section.ButtonLink)));
            }

            return new HomeDTO(node.Id, sections);
        }

        public CrewDTO Map(Crew node)
        {
            // Return 404 if there's no crew members. 
            if (node.CrewMembers == null) throw new NotFoundException("Crew node was not found.");

            // initialise list of crew members.  
            var crewMembers = new List<CrewMemberDTO>();

            // for each crew member, add it to the list.   
            foreach (var crewPC in node.CrewMembers)
            {
                var crewMember = Converters.ConvertPublishedContent<CrewMember>(crewPC);
                crewMembers.Add(new CrewMemberDTO(crewMember.Id, crewMember.CrewName, crewMember.Role, crewMember.Description, crewMember.Image.Url(), crewMember.Autograph.Url()));
            }

            // If call to action is null, return crew dto without a call to action.
            if (node.CallToAction == null)
                return new CrewDTO(node.Id, node.Headline, node.SubHeadline, node.Description, crewMembers);

            // Convert CTO
            var callToActionNode = Converters.ConvertPublishedContent<CallToAction>(node.CallToAction);
            // Map cto to its representational class.
            var ctoDTO = Map(callToActionNode);

            return new CrewDTO(node.Id, node.Headline, node.SubHeadline, node.Description, crewMembers, ctoDTO);
        }

        public CrewMemberDTO Map(CrewMember crewMember)
        {
            var infoSections = new List<InfoSectionDTO>();

            // for each crew member, add it to the list.    
            foreach (var infoPC in crewMember.InfoSections)
            {
                var info = Converters.ConvertPublishedContent<CrewMemberInfoSection>(infoPC);
                infoSections.Add(new InfoSectionDTO(info.Header, info.Content));
            }
            return new CrewMemberDTO(crewMember.Id, crewMember.CrewName, crewMember.Role, crewMember.Description, crewMember.Image.Url(), crewMember.Autograph.Url(), infoSections);
        }

        public CallToActionDTO Map(CallToAction cto)
        {

            if (cto.FeaturedParagraphs == null) throw new NotFoundException("Call to action node must contain paragraphs.");
            var paragraphs = new List<ParagraphDTO>();
            foreach (var paraPC in cto.FeaturedParagraphs)
            {
                var paragraph = Converters.ConvertPublishedContent<Paragraph>(paraPC);
                paragraphs.Add(new ParagraphDTO(paragraph.Text));
            }

            return new CallToActionDTO(cto.Headline, paragraphs, cto.ButtonText);
        }


        public ShopDTO Map(Shop shop)
        {
            if (shop.ShopItems == null) throw new NotFoundException("Shop node was not found.");
            List<ShopItemDTO> shopItems = new List<ShopItemDTO>();
            foreach (var itemPC in shop.ShopItems)
            {
                var shopItem = Converters.ConvertPublishedContent<ShopItem>(itemPC);
                var crewPC = shopItem.CrewMember.FirstOrDefault();
                var crew = Converters.ConvertPublishedContent<CrewMember>(crewPC);
                var crewMemberDTO = new CrewMemberDTO(crew.Id, crew.Name, crew.Role, crew.Description, crew.Image.Url(), crew.Autograph.Url());
                shopItems.Add(new ShopItemDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price, crewMemberDTO, new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink)));
            }
            return new ShopDTO(shop.Id, shop.Headline, shop.Description, shopItems);
        }


        public QuizDTO Map(Quiz quiz)
        {
            if (quiz.QuizTheme == null) throw new NotFoundException("Quiz must contain themes. ");
            List<QuizThemesDTO> quizThemes = new List<QuizThemesDTO>();
            foreach (var themePC in quiz.QuizTheme)
            {
                var theme = Converters.ConvertPublishedContent<QuizTheme>(themePC);
                quizThemes.Add(new QuizThemesDTO(theme.Id, theme.Title, theme.Image.Url()));
            }
            return new QuizDTO(quiz.QuizHeader, quiz.Description, quizThemes);
        }

        public IEnumerable<QuestionDTO> Map(QuizTheme theme)
        {
            var list = new List<QuestionDTO>();
            if (theme.Questions == null) return list;

            foreach (var questionPC in theme.Questions)
            {
                var question = Converters.ConvertPublishedContent<QuizQuestion>(questionPC);
                if (question.Answers == null) throw new NotFoundException("Question must contain answer options.");
                var answers = new List<AnswerDTO>();
                foreach (var answerPC in question.Answers)
                {
                    var ans = Converters.ConvertPublishedContent<Answer>(answerPC);
                    answers.Add(new AnswerDTO(ans.Id, ans.QuizAnswer, ans.Correct));
                }
                if (question.Image != null)
                    list.Add(new QuestionDTO(question.Id, question.Question, question.Image.Url(), answers));
                else
                    list.Add(new QuestionDTO(question.Id, question.Question, answers));
            }

            return list;
        }

        public InventoryDTO Map(Inventory inventory)
        {
            // Map clock content to its representational class.
            var clockDTO = new ClockDTO(inventory.ClockHeadline, inventory.Colour.ToString(), inventory.Hour, inventory.Minutes,
                inventory.Seconds);

            // If there's not resources, throw an error. Inventory without resources is not valid.
            if (inventory.Resources == null) throw new NotFoundException("Inventory must contain resources.");

            var resources = new List<ResourceDTO>();
            foreach (var resourcePC in inventory.Resources)
            {
                var resource = Converters.ConvertPublishedContent<Resource>(resourcePC);
                resources.Add(new ResourceDTO(resource.Title, resource.Colour.ToString()));
            }

            var resourcesDto = new ResourcesDTO(resources);

            if (inventory.CallToAction == null)
                return new InventoryDTO(inventory.Headline, inventory.SubHeadlineOptional, inventory.Description,
                    clockDTO, resourcesDto);

            // Map call to action to its representational class.
            var cto = Converters.ConvertPublishedContent<CallToAction>(inventory.CallToAction);
            var ctoDTO = Map(cto);

            return new InventoryDTO(inventory.Headline, inventory.SubHeadlineOptional, inventory.Description,
                clockDTO, resourcesDto, ctoDTO);
        }

        public SharedDTO Map(Shared shared)
        {
            return new SharedDTO(shared.Favicon.Url(), shared.Title);
        }

        public HeaderDTO Map(Header header)
        {
            //return new HeaderDTO(header.LogoImage.Url());
            if (header.Menu == null) throw new NotFoundException("Header must contain a navigation menu.");

            //choose the first menu in the list of available menus.
            var rootMenu = header.Menu.FirstOrDefault();

            var menu = new List<MenuContainer>();
            foreach (var item in rootMenu.Children)
            {
                menu.Add(MapMenu(item));
            }

            return new HeaderDTO(header.LogoImage.Url(), header.LogoText, header.MenuIconOpen.Url(),
                header.MenuIconClose.Url(), new MenuDTO(menu));
        }

        public MenuContainer MapMenu(IPublishedContent menu)
        {
            // if it's a menuitem, we can terminate recursion.
            if (menu.TryConvertTo<MenuItem>().Success)
            {
                var convertedItem = Converters.ConvertPublishedContent<MenuItem>(menu);
                return new MenuItemDTO(convertedItem.Id, convertedItem.Text, convertedItem.Link);
            }

            // if it isn't a menuitem, it must be a menu.
            var convertedMenu = Converters.ConvertPublishedContent<Menu>(menu);

            // list that can contain supertype of menu and menuitem.
            var list = new List<MenuContainer>();
            foreach (var convertedMenuItem in convertedMenu.MenuItems)
            {
                // recursively add menus.
                list.Add(MapMenu(convertedMenuItem));
            }
            return new MenuDTO(list);
        }

        public TrackerDTO Map(Tracker tracker)
        {
            // Map call to action to its representational class.
            var cto = Converters.ConvertPublishedContent<CallToAction>(tracker.CallToAction);
            var ctoDTO = Map(cto);
            return new TrackerDTO(tracker.Headline, tracker.Location, tracker.Speed, tracker.Timestamp, ctoDTO);
        }

        public ShopitemDetailsDTO Map(ShopItem shopItem)
        {
            var button = new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink);

            var crewPC = shopItem.CrewMember.FirstOrDefault();
            var crew = Converters.ConvertPublishedContent<CrewMember>(crewPC);
            var crewMemberDTO = new CrewMemberDTO(crew.Id, crew.Name, crew.Role, crew.Description, crew.Image.Url(), crew.Autograph.Url());

            var dimensionsDTO = new Dimensions(shopItem.Height, shopItem.Width, shopItem.Depth, shopItem.Weight);

            var shopItemDTO = new ShopItemDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price, crewMemberDTO, button);

            return new ShopitemDetailsDTO(shopItemDTO, shopItem.Description, dimensionsDTO);

        }
    }
}