using Flight2Orbit.Exceptions;
using Umbraco.Core;
using Umbraco.Core.Models.PublishedContent;

namespace Flight2Orbit.Helpers
{
    public class Converters
    {
        /// <summary>
        /// Generically convert nodes from Umbraco. 
        /// </summary>
        /// <typeparam name="T">The class name of the node. (Must be the type Umbraco created)</typeparam>
        /// <param name="content">The node before conversion.</param>
        /// <returns>The converted node.</returns>
        /// <exception cref="NotFoundException"></exception>
        /// <exception cref="InternalServerErrorException"></exception> 
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