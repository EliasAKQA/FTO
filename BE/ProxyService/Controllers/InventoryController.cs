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

        [System.Web.Http.HttpGet]
        public async Task<JsonResult<InventoryDTO>> Content()
        {
            // retrieve resources from resourceService
            var resourceFromResourceService = await HttpHelper.GetRequest<ResourcesDTO>($"{Service_Url.Resource}{_pathHelper.Paths.Get("resourceContent")}", _httpClient);

            // retrieve resource display data from umbracoService.
            var resourceFromUmbracoService =
                await HttpHelper.GetRequest<InventoryDTO>($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("inventoryContent")}", _httpClient);

            // loop through the resources and merge the two. 
            foreach (var resource in resourceFromUmbracoService.Resource.Resources)
            {
                resource.Merge(resourceFromResourceService.Resources.Select((item) => item).FirstOrDefault(item => item.Type.Equals(resource.Title)));
            }

            // milliseconds is stored in the resource service. Update the resource in from Umbraco to contain this.
            resourceFromUmbracoService.Resource.MillisecondsToDeath = resourceFromResourceService.MillisecondsToDeath;

            return Json(resourceFromUmbracoService, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        /// <summary>
        /// Update resources when a purchase has been made. Resources are updated based on the total price of purchase.
        /// </summary>
        /// <param name="price">Total price of purchase</param>
        [System.Web.Http.HttpPost]
        public async Task<HttpResponseMessage> Post(int price)
        {
            using (var requestMessage =
                   new HttpRequestMessage(HttpMethod.Post, $"{Service_Url.Resource}{_pathHelper.Paths.Get("postResourceContent")}?price={price}"))
            {
                return await _httpClient.SendAsync(requestMessage);
            }
        }
    }
}