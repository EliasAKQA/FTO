using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class InventoryController : UmbracoApiController
    {
        public UmbracoService Service { get; set; }
        public new Mapper Mapper { get; set; }
        public InventoryController()
        {
            Service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }

        public IHttpActionResult GetInventoryContent()
        {
            var inventory = Service.FetchNode<Inventory>(Inventory.GetModelContentType());
            return Json(Mapper.Map(inventory), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}