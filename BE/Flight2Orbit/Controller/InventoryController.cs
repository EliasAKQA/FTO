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

        public async Task<JsonResult<InventoryDTO>> GetInventoryContent()
        {
            using (HttpClient client = new HttpClient())
            {
                ResourcesDTO resources;
                var apiUrl = "http://localhost:49390/api/resource/getresource";
                client.BaseAddress = new Uri(apiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync(apiUrl);
                if (!response.IsSuccessStatusCode)
                    throw new InternalServerErrorException("Error connecting to resource service.");

                var data = await response.Content.ReadAsStringAsync();
                resources = Newtonsoft.Json.JsonConvert.DeserializeObject<ResourcesDTO>(data);
                var inventory = Service.FetchNode<Inventory>(Inventory.GetModelContentType());
                var inventoryDTO = Mapper.Map(inventory, resources);
                return Json(inventoryDTO, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            }
        }
    }
}