using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using ProxyService.Services;

namespace ProxyService.Controllers
{
    public class ProxyController : ApiController
    {
        private readonly HttpClient _httpClient;
        public ProxyController()
        {
            _httpClient = new HttpClient();
        }

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.Route("{**catchAll}")]
        //public IHttpActionResult Umbraco()
        //{
        //    var url = Request.RequestUri;

        //    return Json("umbraco");
        //    //return await ProxyTo(Service_Url.Umbraco); 
        //}

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.Route("{**catchAll}")]
        //public IHttpActionResult Resource()
        //{
        //    var url = Request.RequestUri;

        //    return Json("resource");
        //    //return await ProxyTo(Service_Url.Umbraco); 
        //}



        private async Task<IHttpActionResult> ProxyTo(string url)
        {
            var response = await _httpClient.GetAsync(url);
            if (response == null) return InternalServerError();
            return Ok(response);
        }

    }
}