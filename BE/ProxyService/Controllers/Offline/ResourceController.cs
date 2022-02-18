using System.Net.Http;
using System.Web.Http;

namespace ProxyService.Controllers
{
    public class ResourceController : ApiController
    {
        private readonly HttpClient _httpClient;
        public ResourceController()
        {
            _httpClient = new HttpClient();
        }

        [System.Web.Http.HttpGet]
        //[System.Web.Http.Route("{**catchAll}")]
        public IHttpActionResult Resource()
        {
            var url = Request.RequestUri;

            return Json(url);
            //return await ProxyTo(Service_Url.Umbraco); 
        }
    }
}