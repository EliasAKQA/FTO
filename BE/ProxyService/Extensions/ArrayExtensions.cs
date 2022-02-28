using System;
using System.Collections.Generic;

namespace ProxyService.Extensions
{
    public static class ArrayExtensions
    {
        /// <summary>
        /// Not in use anymore. (Was used to edit segments of URI).
        /// </summary>
        /// <param name="arr"></param>
        /// <returns></returns>
        public static string ConvertToRelativePath(this string[] arr)
        {
            var segmentsList = new List<string>(arr);
            segmentsList.RemoveAt(0);
            segmentsList.RemoveAt(0);
            segmentsList.RemoveAt(0);
            return String.Join("", segmentsList);
        }
    }
}