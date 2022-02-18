using System.Net.Http;
using System.Threading.Tasks;

namespace ProxyService.Services
{
    public class HttpHelper
    {
        public static async Task<T> GetRequest<T>(string requestUrl, HttpClient client)
        {
            var response = await client.GetAsync(requestUrl);
            var data = await response.Content.ReadAsStringAsync();
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(data);
        }
    }
}