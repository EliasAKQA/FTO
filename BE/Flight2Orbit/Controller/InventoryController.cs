using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models.Inventory;
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

        public IHttpActionResult GetResources()
        {
            var inventory = Service.FetchNode<Inventory>(Inventory.GetModelContentType());
            return Json(Mapper.Map(inventory), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}