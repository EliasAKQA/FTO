using System;
using System.Web.Http;
using Flight2Orbit.Helpers;
using Flight2Orbit.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Web.PublishedModels;
using Umbraco.Web.WebApi;

namespace Flight2Orbit.Controller
{
    public class QuizController : UmbracoApiController
    {
        public UmbracoService Service { get; set; }
        public new Mapper Mapper { get; set; }
        public QuizController()
        {
            Service = new UmbracoService(UmbracoContext);
            Mapper = new Mapper();
        }
        //localhost:{port}/umbraco/api/home/gethomecontent  
        public IHttpActionResult GetQuizContent()
        {
            var quiz = Service.FetchNode<Quiz>(Quiz.GetModelContentType());
            return Json(Mapper.Map(quiz), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        public IHttpActionResult GetQuestions(int id)
        {
            var theme = Service.FetchNodeById(id);
            var convertedTheme = Converters.ConvertPublishedContent<QuizTheme>(theme);
            var questions = Mapper.Map(convertedTheme);
            return Json(new { questions }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}