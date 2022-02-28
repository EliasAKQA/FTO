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

        /// <summary>
        /// Returns every single shop item. (And everything else on the shop page).
        /// </summary>
        [HttpGet]
        public Task<HttpResponseMessage> Content()
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopContent")}");
        }

        /// <summary>
        /// Returns a everything about a specific shop item. (That includes the crew member who found this item)
        /// </summary>
        /// <param name="id">Shop item id.</param>
        [HttpGet]
        public Task<HttpResponseMessage> Content(int id)
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopContentById")}?id={id}");
        }

        /// <summary>
        /// Returns a short overview of a specific shop item.
        /// </summary>
        /// <param name="id">Shop item id</param>
        [HttpGet]
        public Task<HttpResponseMessage> ContentOverview(int id)
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("shopItemOverview")}?id={id}");
        }
    }
}