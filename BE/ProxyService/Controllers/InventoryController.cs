using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ProxyService.Extensions;
using ProxyService.Models;
using ProxyService.Services;

namespace ProxyService.Controllers
{
    public class InventoryController : ApiController
    {
        private readonly HttpClient _httpClient;
        private readonly PathHelper _pathHelper;
        public InventoryController()
        {
            _httpClient = new HttpClient();
            _pathHelper = new PathHelper();
        }

        [HttpGet]
        public async Task<JsonResult<ResourcesDTO>> Content()
        {
            // retrieve resources from resourceService
            var resourceFromResourceService = await HttpHelper.GetRequest<ResourcesDTO>($"{Service_Url.Resource}{_pathHelper.Paths.Get("resourceContent")}", _httpClient);

            // retrieve resource display data from umbracoService.
            var resourceFromUmbracoService =
                await HttpHelper.GetRequest<ResourcesDTO>($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("inventoryContent")}", _httpClient);

            // loop through the resources and merge the two. 
            foreach (var resource in resourceFromUmbracoService.Resources)
            {
                resource.Merge(resourceFromResourceService.Resources.Select((item) => item).FirstOrDefault(item => item.Type.Equals(resource.Title)));
            }

            return Json(new ResourcesDTO(resourceFromUmbracoService.Resources, resourceFromResourceService.MillisecondsToDeath), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }


    }
}