using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class TrackerController : UmbracoApiController
    {
        public UmbracoService Service { get; set; }
        public new Mapper Mapper { get; set; }
        public TrackerController()
        {
            Service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
            Mapper = new Mapper();
        }

        public IHttpActionResult GetTrackerContent()
        {
            var tracker = Service.FetchNode<Tracker>(Tracker.GetModelContentType());
            return Json(Mapper.Map(tracker), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}