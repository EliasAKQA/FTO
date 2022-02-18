using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using ProxyService.Extensions;
using ProxyService.Services;

namespace ProxyService.Controllers
{
    public class UmbracoController : ApiController
    {
        private readonly HttpClient _httpClient;
        public UmbracoController()
        {
            _httpClient = new HttpClient();
        }

        [System.Web.Http.HttpGet]
        public Task<HttpResponseMessage> Proxy()
        {
            var url = Request.RequestUri;
            var urlSegments = url.Segments;
            var relativePath = urlSegments.ConvertToRelativePath();
            return _httpClient.GetAsync($"{Service_Url.Umbraco}/{relativePath}{url.Query}");
        }
    }
}