using System.Net.Http;
using System.Threading.Tasks;

namespace ProxyService.Services
{
    public class HttpHelper
    {
        /// <summary>
        /// Get and serialize response. 
        /// </summary>
        /// <typeparam name="T">The type to be deserialized to.</typeparam>
        /// <param name="requestUrl"></param>
        /// <param name="client"></param>
        public static async Task<T> GetRequest<T>(string requestUrl, HttpClient client)
        {
            var response = await client.GetAsync(requestUrl);
            var data = await response.Content.ReadAsStringAsync();
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(data);
        }
    }
}