using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class ShopController : UmbracoApiController
    {
        public IHttpActionResult GetShopContent()
        {
            // Query Shop node from DB 
            var shopNode = UmbracoContext.Content.GetByContentType(Shop.GetModelContentType())?.FirstOrDefault();
            // if it's null, return http response with status code 404 
            if (shopNode == null) return NotFound();
            // Convert to Home.   
            var shop = Converters.ConvertPublishedContent<Shop>(shopNode);

            if (shop.ShopItems == null) return NotFound();
            List<ShopItemDTO> shopItems = new List<ShopItemDTO>();
            foreach (var itemPC in shop.ShopItems)
            {
                var shopItem = Converters.ConvertPublishedContent<ShopItem>(itemPC);
                shopItems.Add(new ShopItemDTO(shopItem.Image.Url(), shopItem.Title, shopItem.Price, new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink)));
            }

            return Json(new ShopDTO(shop.Headline, shop.Description, shopItems), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            //return Json(new HomeDTO(sections));
        }
    }
}