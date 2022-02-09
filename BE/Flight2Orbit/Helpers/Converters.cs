using Flight2Orbit.Exceptions;
using Umbraco.Core;
using Umbraco.Core.Models.PublishedContent;

namespace Flight2Orbit.Helpers
{
    public class Converters
    {
        public static T ConvertPublishedContent<T>(IPublishedContent content)
        {
            // if it's null, return http response with status code 404
            if (content == null) throw new NotFoundException("Node not found.");
            var convertAttempt = content.TryConvertTo<T>();
            if (!convertAttempt.Success) throw new InternalServerErrorException("Conversion error");
            return convertAttempt.Result;
        }
    }
}