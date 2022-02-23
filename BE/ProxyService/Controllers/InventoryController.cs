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

            resourceFromUmbracoService.Resource.MillisecondsToDeath = resourceFromResourceService.MillisecondsToDeath;

            return Json(resourceFromUmbracoService, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        [System.Web.Http.HttpPost]
        public async Task<HttpResponseMessage> Post(int price)
        {
            //return await _httpClient.PostAsync("");
            using (var requestMessage =
                   new HttpRequestMessage(HttpMethod.Post, $"{Service_Url.Resource}{_pathHelper.Paths.Get("postResourceContent")}?price={price}"))
            {
                return await _httpClient.SendAsync(requestMessage);
            }
        }

        //[HttpPost]
        //public async Task<HttpResponseMessage> Post(CartDTO cart)
        //{
        //    var cookie = Request.Headers.GetCookies("session-id").FirstOrDefault();

        //    using (var handler = new HttpClientHandler { UseCookies = false })
        //    using (var client = new HttpClient(handler))
        //    {
        //        using (var requestMessage =
        //               new HttpRequestMessage(HttpMethod.Post, $"{Service_Url.Cart}{_pathHelper.Paths.Get("postCartContent")}"))
        //        {
        //            if (cookie != null) requestMessage.Headers.Add("cookie", $"session-id={cookie["session-id"].Value}");

        //            // serialize   
        //            var json = JsonConvert.SerializeObject(cart);
        //            using (var stringContent = new StringContent(json, Encoding.UTF8, "application/json"))
        //            {
        //                requestMessage.Content = stringContent;

        //                return await client
        //                    .SendAsync(requestMessage);
        //            }
        //        }
        //    }
        //}
    }
}