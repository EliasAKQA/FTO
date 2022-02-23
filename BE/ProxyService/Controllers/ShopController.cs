using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using ProxyService.Services;


namespace ProxyService.Controllers
{
    public class ShopController : ApiController
    {
        private readonly HttpClient _httpClient;
        private readonly PathHelper _pathHelper;
        public ShopController()
        {
            _httpClient = new HttpClient();
            _pathHelper = new PathHelper();
        }

        [HttpGet]
        public Task<HttpResponseMessage> Content()
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopContent")}");
        }

        [HttpGet]
        public Task<HttpResponseMessage> Content(int id)
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopContentById")}?id={id}");
        }
        [HttpGet]
        public Task<HttpResponseMessage> ContentOverview(int id)
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopItemOverview")}?id={id}");
        }
    }
}