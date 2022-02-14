using System.Linq;
using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models.Shared;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class SharedController : UmbracoApiController
    {
        public UmbracoService service { get; set; }
        public new Mapper Mapper { get; set; }
        public SharedController()
        {
            service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }

        public IHttpActionResult GetMetaData()
        {
            var shared = service.FetchNode<Shared>(Shared.GetModelContentType());
            return Json(new { PageTitle = shared.Title, Favicon = shared.Favicon.Url() }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        public IHttpActionResult GetHeaderContent()
        {
            var shared = service.FetchNode<Shared>(Shared.GetModelContentType());
            var headerPC = shared.Header.FirstOrDefault();
            var header = Converters.ConvertPublishedContent<Header>(headerPC);
            return Json(Mapper.Map(header), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}