using System.Collections.Generic;
using System.Linq;
using System.Web.Services.Configuration;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;

namespace Flight2Orbit.Services
{
    public class UmbracoService
    {
        public UmbracoContext ctx { get; set; }

        public UmbracoService(UmbracoContext ctx)
        {
            this.ctx = ctx;
        }

        public object FetchNode<T>()
        {
            if (typeof(T) == typeof(Home)) return FetchHome();
            if (typeof(T) == typeof(Shop)) return FetchShop();
            //if (typeof(T) == typeof(Crew)) return FetchCrew();

            //if (typeof(T) == typeof(Crew)) return FetchCrew<Home>();
            throw new NoSuchTypeException("The specified type does not exist in the context.");
        }

        private object FetchHome()
        {
            var homeNode = ctx.Content.GetByContentType(Home.GetModelContentType())?.FirstOrDefault();

            // Convert to Home.   
            var home = Converters.ConvertPublishedContent<Home>(homeNode);

            if (home.Sections == null) throw new NotFoundException("Home node was not found.");
            var sections = new List<SectionDTO>();
            foreach (var sectionPC in home.Sections)
            {
                var section = Converters.ConvertPublishedContent<Section>(sectionPC);
                sections.Add(new SectionDTO(section.Header, section.Description, section.Image.Url(), new ButtonDTO(section.ButtonText, section.ButtonLink)));
            }

            return new HomeDTO(home.Id, sections);
        }

        private object FetchShop()
        {
            // Query Shop node from DB 
            var shopNode = ctx.Content.GetByContentType(Shop.GetModelContentType())?.FirstOrDefault();

            // Convert to Home.    
            var shop = Converters.ConvertPublishedContent<Shop>(shopNode);

            if (shop.ShopItems == null) throw new NotFoundException("Shop node was not found.");
            List<ShopItemDTO> shopItems = new List<ShopItemDTO>();
            foreach (var itemPC in shop.ShopItems)
            {
                var shopItem = Converters.ConvertPublishedContent<ShopItem>(itemPC);
                shopItems.Add(new ShopItemDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price, new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink)));
            }

            return new ShopDTO(shop.Id, shop.Headline, shop.Description, shopItems);
        }

        //private object FetchCrew() 
        //{
        //    // Query Crew node from DB    
        //    var crewNode = ctx.Content.GetByContentType(Crew.GetModelContentType())?.FirstOrDefault();

        //    // Convert to Cew.    
        //    var crew = Converters.ConvertPublishedContent<Crew>(crewNode);

        //    // Return 404 if there's no crew members.
        //    if (crew.CrewMembers == null) throw new NotFoundException("Crew node was not found.");

        //    // initialise list of crew members.  
        //    List<CrewMemberDTO> crewMembers = new List<CrewMemberDTO>();

        //    // for each crew member, add it to the list.   
        //    foreach (var crewPC in crew.CrewMembers)
        //    {
        //        var crewMember = Converters.ConvertPublishedContent<CrewMember>(crewPC);
        //        crewMembers.Add(new CrewMemberDTO(crewMember.Id, crewMember.CrewName, crewMember.Role, crewMember.Description, crewMember.Image.Url(), crewMember.Autograph.Url()));
        //    }

        //    // initialise list of paragraphs regarding the call to action
        //    List<Paragraph> paragraphs = new List<Paragraph>() { new Paragraph(crew.Paragraph1), new Paragraph(crew.Paragraph2Optional) };

        //    // return as json with camelCase settings.  
        //    return new CrewDTO(crew.Id, crew.Headline, crew.SubHeadline, crew.Description, crewMembers,
        //        new CallToActionDTO(crew.CtoHeadline, paragraphs, crew.ButtonText));
        //}

        public IPublishedContent FetchNodeById(int id)
        {
            return ctx.Content.GetById(id);
        }
    }
}