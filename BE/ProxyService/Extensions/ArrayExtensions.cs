using System;
using System.Collections.Generic;

namespace ProxyService.Extensions
{
    public static class ArrayExtensions
    {
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