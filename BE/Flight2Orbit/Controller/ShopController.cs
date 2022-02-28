using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class ShopController : UmbracoApiController
    {
        public UmbracoService service { get; set; }
        public new Mapper Mapper { get; set; }

        public ShopController()
        {
            service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }

        // ENDPOINT EXAMPLE: http://localhost:54252/umbraco/api/shop/getshopcontent
        public IHttpActionResult GetShopContent()
        {
            var shop = service.FetchNode<Shop>(Shop.GetModelContentType());
            return Json(Mapper.Map(shop), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        // ENDPOINT EXAMPLE: http://localhost:54252/umbraco/api/shop/getshopitemdetails?id=1073
        public IHttpActionResult GetShopItemDetails(int id)
        {
            var shopitemPC = service.FetchNodeById(id);
            var shopItem = Converters.ConvertPublishedContent<ShopItem>(shopitemPC);
            return Json(Mapper.Map(shopItem), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        public IHttpActionResult GetShopitemOverview(int id)
        {
            var shopItemPC = service.FetchNodeById(id);
            var shopItem = Converters.ConvertPublishedContent<ShopItem>(shopItemPC);
            return Json(new ShopItemOverviewDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}