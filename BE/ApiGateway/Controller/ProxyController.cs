using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;

namespace ApiGateway.Controller
{

    public class ProxyController : ApiController
    {
        private readonly HttpClient _httpClient;
        public ProxyController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }
        [System.Web.Http.HttpGet]
        public async Task<IActionResult> Books()
            => await ProxyTo("https://localhost:44388/books");
        [System.Web.Http.HttpGet]
        public async Task<IActionResult> Authors()
            => await ProxyTo("https://localhost:44307/authors");
        private async Task<ContentResult> ProxyTo(string url)
            => Content(await _httpClient.GetStringAsync(url));


    }

}