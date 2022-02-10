using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
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
        //localhost:{port}/umbraco/api/home/gethomecontent
        public IHttpActionResult GetHomeContent()
        {
            // Query Home node from DB
            var homeNode = UmbracoContext.Content.GetByContentType(Home.GetModelContentType())?.FirstOrDefault();

            // Convert to Home.   
            var home = Converters.ConvertPublishedContent<Home>(homeNode);

            if (home.Sections == null) return NotFound();
            var sections = new List<SectionDTO>();
            foreach (var sectionPC in home.Sections)
            {
                var section = Converters.ConvertPublishedContent<Section>(sectionPC);
                sections.Add(new SectionDTO(section.Header, section.Description, section.Image.Url(), new ButtonDTO(section.ButtonText, section.ButtonLink)));
            }
            return Json(new HomeDTO(sections), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}