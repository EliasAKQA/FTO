using System;
using System.Linq;
using Flight2Orbit.Exceptions;
using Lucene.Net.Search.Function;
using Umbraco.Core;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;

namespace Flight2Orbit.Helpers
{
    public class Helpers
    {
        //public static T FetchNode<T>(UmbracoContext ctx)
        //{
        //    //UmbracoContext.Content.GetByContentType(Shop.GetModelContentType())?.FirstOrDefault(); 
        //    var _helper = new UmbracoHelper(ctx.Current);
        //    var node = ctx.Content.GetByContentType(typeof(T).GetModelContentType())?.FirstOrDefault();
        //    var convertAttempt = node.TryConvertTo<T>();
        //    if (!convertAttempt.Success) throw new InternalServerErrorException("Conversion error");
        //    return convertAttempt.Result;
        //}
    }
}