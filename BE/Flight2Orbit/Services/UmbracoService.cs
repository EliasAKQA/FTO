using System.Collections.Generic;
using System.Linq;
using System.Web.Services.Configuration;
using Flight2Orbit.Exceptions;
using Flight2Orbit.Helpers;
using Flight2Orbit.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.Web.PublishedModels;

namespace Flight2Orbit.Services
{
    public class UmbracoService
    {
        public UmbracoContext ctx { get; set; }

        public UmbracoService(UmbracoContext ctx)
        {
            this.ctx = ctx;
        }

        public T FetchNode<T>(IPublishedContentType type)
        {
            var node = ctx.Content.GetByContentType(type)?.FirstOrDefault();
            return Converters.ConvertPublishedContent<T>(node);
        }


        public IPublishedContent FetchNodeById(int id)
        {
            return ctx.Content.GetById(id);
        }
    }

