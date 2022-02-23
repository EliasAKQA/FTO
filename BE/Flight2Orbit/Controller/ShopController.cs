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

            var button = new ButtonDTO(shopItem.ButtonText, shopItem.ButtonLink);



            var crewPC = shopItem.CrewMember.FirstOrDefault();
            var crew = Converters.ConvertPublishedContent<CrewMember>(crewPC);
            var crewMemberDTO = new CrewMemberDTO(crew.Id, crew.Name, crew.Role, crew.Description, crew.Image.Url(), crew.Autograph.Url());

            var dimensionsDTO = new Dimensions(shopItem.Height, shopItem.Width, shopItem.Depth, shopItem.Weight);

            var shopItemDTO = new ShopItemDTO(shopItem.Id, shopItem.Image.Url(), shopItem.Title, shopItem.Price, crewMemberDTO, button);

            var shopitemDetailsDTO = new ShopitemDetailsDTO(shopItemDTO, shopItem.Description, dimensionsDTO);

            return Json(shopitemDetailsDTO, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        [System.Web.Http.HttpPost]
        public async Task<IHttpActionResult> Post([FromBody] double price)
        {
            using (HttpClient client = new HttpClient())
            {
                var apiUrl = $"http://localhost:49390/api/resource/post?price={price}";
                client.BaseAddress = new Uri(apiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.PostAsync(apiUrl, new HttpMessageContent(new HttpRequestMessage(HttpMethod.Post, apiUrl)));
                if (!response.IsSuccessStatusCode)
                    throw new InternalServerErrorException("Error connecting to resource service.");

                var data = await response.Content.ReadAsStringAsync();


                return Ok("Succesfully posted.");
            }
        }
    }
}