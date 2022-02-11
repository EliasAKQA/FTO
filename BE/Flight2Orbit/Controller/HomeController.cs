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
        public UmbracoService Service { get; set; }
        public new Mapper Mapper { get; set; }
        public HomeController()
        {
            Service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }
        //localhost:{port}/umbraco/api/home/gethomecontent 
        public IHttpActionResult GetHomeContent()
        {
            var home = Service.FetchNode<Home>(Home.GetModelContentType());
            return Json(Mapper.Map(home), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}