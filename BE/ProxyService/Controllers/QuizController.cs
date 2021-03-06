using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using ProxyService.Services;

namespace ProxyService.Controllers
{
    public class QuizController : ApiController
    {
        private readonly HttpClient _httpClient;
        private readonly PathHelper _pathHelper;
        public QuizController()
        {
            _httpClient = new HttpClient();
            _pathHelper = new PathHelper();
        }

        [HttpGet]
        public Task<HttpResponseMessage> Content()
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("quizContent")}");
        }

        [HttpGet]
        public Task<HttpResponseMessage> Content(int id)
        {
            return _httpClient.GetAsync($"{Service_Url.Umbraco}{_pathHelper.Paths.Get("quizContentById")}?id={id}");
        }
    }
}