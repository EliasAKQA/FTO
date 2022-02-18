using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using ProxyService.Services;

namespace ProxyService.Controllers
{
    public class SharedController : ApiController
    {
        private readonly HttpClient _httpClient;
        private readonly PathHelper _pathHelper;
        public SharedController()
        {
            _httpClient = new HttpClient();
            _pathHelper = new PathHelper();
        }

        [HttpGet]
        public Task<HttpResponseMessage> Meta()
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("sharedMetaContent")}");
        }

        //[HttpGet]
        //public Task<HttpResponseMessage> Header()
        //{
        //    return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("sharedHeaderContent")}");
        //}
    }
}