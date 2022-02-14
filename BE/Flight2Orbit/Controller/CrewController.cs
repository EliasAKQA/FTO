using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class CrewController : UmbracoApiController
    {
        public UmbracoService service { get; set; }
        public new Mapper Mapper { get; set; }
        public CrewController()
        {
            service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }

        public IHttpActionResult GetCrewContent()
        {
            var crew = service.FetchNode<Crew>(Crew.GetModelContentType());
<<<<<<< HEAD

            // return as json with camelCase settings.  
=======
>>>>>>> 53f7b6097f32d1db26068b734918ac280cc503d7
            return Json(Mapper.Map(crew), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}