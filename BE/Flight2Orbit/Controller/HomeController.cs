using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Core;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class HomeController : UmbracoApiController
    {
        public UmbracoService service { get; set; }
        public HomeController()
        {
            service = new UmbracoService(UmbracoContext);
        }
        //localhost:{port}/umbraco/api/home/gethomecontent
        public IHttpActionResult GetHomeContent()
        {
            var home = service.FetchNode<Home>();
            return Json(home, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}