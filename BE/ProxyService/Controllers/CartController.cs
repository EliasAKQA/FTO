using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
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
        public async Task<HttpResponseMessage> Content()
        {
            var cookie = Request.Headers.GetCookies("session-id").FirstOrDefault();

            using (var handler = new HttpClientHandler { UseCookies = false })
            using (var client = new HttpClient(handler))
            {
                using (var requestMessage =
                       new HttpRequestMessage(HttpMethod.Get, $"{Service_Url.Cart}{_pathHelper.Paths.Get("cartContent")}"))
                {
                    if (cookie != null) requestMessage.Headers.Add("cookie", $"session-id={cookie["session-id"].Value}");
                    return await client.SendAsync(requestMessage);
                }
            }
        }

        [HttpPost]
        public async Task<HttpResponseMessage> Post(CartDTO cart)
        {
            var cookie = Request.Headers.GetCookies("session-id").FirstOrDefault();

            using (var handler = new HttpClientHandler { UseCookies = false })
            using (var client = new HttpClient(handler))
            {
                using (var requestMessage =
                       new HttpRequestMessage(HttpMethod.Post, $"{Service_Url.Cart}{_pathHelper.Paths.Get("postCartContent")}"))
                {
                    if (cookie != null) requestMessage.Headers.Add("cookie", $"session-id={cookie["session-id"].Value}");

                    // serialize   
                    var json = JsonConvert.SerializeObject(cart);
                    using (var stringContent = new StringContent(json, Encoding.UTF8, "application/json"))
                    {
                        requestMessage.Content = stringContent;

                        return await client
                            .SendAsync(requestMessage);
                    }
                }
            }
        }
    }
}