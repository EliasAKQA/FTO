using System.Collections.Generic;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Models;
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

            if (node.CallToAction == null)
                return new CrewDTO(node.Id, node.Headline, node.SubHeadline, node.Description, crewMembers);

            var callToActionNode = Converters.ConvertPublishedContent<CallToAction>(node.CallToAction);

            if (callToActionNode.FeaturedParagraphs == null) throw new NotFoundException("Call to action node must contain paragraphs.");
            var paragraphs = new List<ParagraphDTO>();
            foreach (var paraPC in callToActionNode.FeaturedParagraphs)
            {
                var paragraph = Converters.ConvertPublishedContent<Paragraph>(paraPC);
                paragraphs.Add(new ParagraphDTO(paragraph.Text));
            }

            var ctoDTO = new CallToActionDTO(callToActionNode.Headline, paragraphs, callToActionNode.ButtonText);
            return new CrewDTO(node.Id, node.Headline, node.SubHeadline, node.Description, crewMembers, ctoDTO);
        }

        public ShopDTO Map(Shop shop)
        {
            if (shop.ShopItems == null) throw new NotFoundException("Shop node was not found.");
            List<ShopItemDTO> shopItems = new List<ShopItemDTO>();
            foreach (var itemPC in shop.ShopItems)
            {
                var shopItem = Converters.ConvertPublishedContent<ShopItem>(itemPC);
                shopItems.Add(new ShopItemDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price, new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink)));
            }

            return new ShopDTO(shop.Id, shop.Headline, shop.Description, shopItems);
        }
    }
}