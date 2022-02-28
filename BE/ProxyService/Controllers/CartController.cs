using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ProxyService.Models.Cart;
using ProxyService.Services;


namespace ProxyService.Controllers
{
    public class CartController : ApiController
    {
        private readonly HttpClient _httpClient;
        private readonly PathHelper _pathHelper;
        public CartController()
        {
            _httpClient = new HttpClient();
            _pathHelper = new PathHelper();
        }

        [HttpGet]
        public async Task<JsonResult<List<ProductDTO>>> Content()
        {
            // Check if there's a cookie already present. If there is, we want to use it.
            var cookie = Request.Headers.GetCookies("session-id").FirstOrDefault();

            // Use a new client handler with different cookie settings.
            using (var handler = new HttpClientHandler { UseCookies = false })
            using (var client = new HttpClient(handler))
            {
                using (var requestMessage =
                       new HttpRequestMessage(HttpMethod.Get, $"{Service_Url.Cart}{_pathHelper.Paths.Get("cartContent")}"))
                {
                    // if cookie isn't null, add it to the request (otherwise send regular request).
                    if (cookie != null) requestMessage.Headers.Add("cookie", $"session-id={cookie["session-id"].Value}");
                    var res = await client.SendAsync(requestMessage);
                    var data = await res.Content.ReadAsStringAsync();
                    var cart = Newtonsoft.Json.JsonConvert.DeserializeObject<CartDTO>(data);

                    // For every product id in the cart, we want to retrieve the specific data. 
                    var productDtos = new List<ProductDTO>();

                    // if it's null, just return an empty cart.
                    if (cart == null || cart.CartLines == null) return Json(productDtos, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
                    foreach (var cartLine in cart.CartLines)
                    {
                        var tempRes = await HttpHelper.GetRequest<ProductDTO>(
                            $"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopItemOverview")}?id={cartLine.Product.Id}", client);
                        productDtos.Add(tempRes);
                    }

                    return Json(productDtos, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
                }
            }
        }

        /// <summary>
        /// Override previous cart. 
        /// </summary>
        /// <param name="cart">The cart object to override.</param>
        /// <returns>Updated cart.</returns>
        [HttpPost]
        public async Task<HttpResponseMessage> Post(CartDTO cart)
        {
            // retrieve the existing cookie. (or null if none exist)
            var cookie = Request.Headers.GetCookies("session-id").FirstOrDefault();

            // override client with new cookie options.
            using (var handler = new HttpClientHandler { UseCookies = false })
            using (var client = new HttpClient(handler))
            {
                using (var requestMessage =
                       new HttpRequestMessage(HttpMethod.Post, $"{Service_Url.Cart}{_pathHelper.Paths.Get("postCartContent")}"))
                {
                    if (cookie != null) requestMessage.Headers.Add("cookie", $"session-id={cookie["session-id"].Value}");

                    // Serialize the cart to JSON before sending to the cart service.
                    var json = JsonConvert.SerializeObject(cart);
                    using (var stringContent = new StringContent(json, Encoding.UTF8, "application/json"))
                    {
                        requestMessage.Content = stringContent;

                        // return the response i.e. the new cart.
                        return await client
                            .SendAsync(requestMessage);
                    }
                }
            }
        }
    }
}