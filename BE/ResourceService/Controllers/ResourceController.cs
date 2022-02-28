using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ResourceService.DAL;
using ResourceService.Models;
using ResourceService.Models.DTO;

namespace ResourceService.Controllers
{
    public class ResourceController : ApiController
    {
        public ResourceContext Context { get; set; }

        public ResourceController()
        {
            Context = new ResourceContext();
        }

        [HttpGet]
        public IHttpActionResult GetResources()
        {
            var res = Context.Resources;
            var resources = new List<ResourceDTO>();
            var milliseconds = 0;
            foreach (var resource in res)
            {
                milliseconds += resource.MillisecondsToDepleted;
                resources.Add(new ResourceDTO(resource.Type.ToString(), resource.CalculatePercentage()));
            }
            return Json(new ResourcesDTO(resources, milliseconds), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        [HttpPost]
        public IHttpActionResult Post(int price)
        {
            Context.Resources.Load();
            var resources = Context.Resources.Local;
            foreach (var resource in resources)
            {
                // Update all resources, but to illustrate difference in resource cap, add the resource amount to the new value.
                resource.Amount += (price / resources.Count) + (resource.Amount / 5);
            }

            Context.SaveChanges();
            return Json(price);
        }
    }
}