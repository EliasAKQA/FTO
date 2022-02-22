using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
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
        public Task<HttpResponseMessage> Content()
        {
            return _httpClient.GetAsync($"{Service_Url.Cart}{_pathHelper.Paths.Get("cartContent")}");
        }

        [HttpPost]
        public Task<HttpResponseMessage> Post()
        {
            var content = new HttpMessageContent(Request);
            return _httpClient.PostAsync($"{Service_Url.Cart}{_pathHelper.Paths.Get("cartContent")}", null);
        }
    }
}