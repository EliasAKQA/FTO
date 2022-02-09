using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class CrewController : UmbracoApiController
    {
        //public IHttpActionResult GetCrewContent()  
        //{

        //    // Query Home node from DB
        //    var crewNode = UmbracoContext.Content.GetByContentType(Crew.GetModelContentType())?.FirstOrDefault();

        //    // if it's null, return http response with status code 404 
        //    if (crewNode == null) return NotFound();
        //    // Convert to Home.    
        //    var crew = Converters.ConvertPublishedContent<Crew>(crewNode);

        //    if (crew.CrewMembers == null) return NotFound();
        //    List<CrewMemberDTO> crewMembers = new List<CrewMemberDTO>();
        //    foreach (var crewPC in crew.CrewMembers)
        //    {
        //        var crewMember = Converters.ConvertPublishedContent<CrewMember>(crewPC);
        //        crewMembers.Add(new CrewMemberDTO(crewMember.CrewName, crewMember.Role, crewMember.Description, crewMember.Image.Url(), crewMember.Autograph.Url()));
        //    }


        //    //List<Paragraph> paragraphs = new List<Paragraph>() { crew.Paragraph1, crew.Paragraph2Optional };
        //    return Json(new CrewDTO(crew.Headline, crew.SubHeadline, crew.Description, crewMembers,
        //        new CallToActionDTO(crew.CtoHeadline)));
        //    //return Json("CHANGE ME");
        //}
    }
}