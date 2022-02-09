using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
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
            // if it's null, return http response with status code 404 
            if (homeNode == null) return NotFound();
            // Convert to Home.   
            var home = Converters.ConvertPublishedContent<Home>(homeNode);

            if (home.Sections == null) return NotFound();
            List<SectionDTO> sections = new List<SectionDTO>();
            foreach (var sectionPC in home.Sections)
            {
                var section = Converters.ConvertPublishedContent<Section>(sectionPC);
                sections.Add(new SectionDTO(section.Header, section.Description, section.Image.Url(), new ButtonDTO(section.Text, section.Link)));
            }
            return Json(new HomeDTO(sections));
        }
    }
}