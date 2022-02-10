using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class CrewController : UmbracoApiController
    {
        public IHttpActionResult GetCrewContent()
        {

            // Query Crew node from DB   
            var crewNode = UmbracoContext.Content.GetByContentType(Crew.GetModelContentType())?.FirstOrDefault();

            // Convert to Cew.    
            var crew = Converters.ConvertPublishedContent<Crew>(crewNode);

            // Return 404 if there's no crew members.
            if (crew.CrewMembers == null) return NotFound();

            // initialise list of crew members. 
            List<CrewMemberDTO> crewMembers = new List<CrewMemberDTO>(); 

            // for each crew member, add it to the list. 
            foreach (var crewPC in crew.CrewMembers)
            {
                var crewMember = Converters.ConvertPublishedContent<CrewMember>(crewPC);
                crewMembers.Add(new CrewMemberDTO(crewMember.CrewName, crewMember.Role, crewMember.Description, crewMember.Image.Url(), crewMember.Autograph.Url()));
            }

            // initialise list of paragraphs regarding the call to action
            List<Paragraph> paragraphs = new List<Paragraph>() { new Paragraph(crew.Paragraph1), new Paragraph(crew.Paragraph2Optional) };

            // return as json with camelCase settings.  
            return Json(new CrewDTO(crew.Headline, crew.SubHeadline, crew.Description, crewMembers,
                new CallToActionDTO(crew.CtoHeadline, paragraphs, crew.ButtonText)), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}