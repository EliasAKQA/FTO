using System.Collections.Generic;
using System.Data.Entity;
using ResourceService.Models;

namespace ResourceService.DAL
{
    public class ResourceInitializer : DropCreateDatabaseIfModelChanges<ResourceContext>
    {
        protected override void Seed(ResourceContext context)
        {
            // dummy data
            var resources = new List<Resource>();
            resources.Add(new Resource(ResourceType.Water, 3413));
            resources.Add(new Resource(ResourceType.Food, 1422));

            resources.ForEach((resource) => context.Resources.Add(resource));

            context.SaveChanges();
        }

    }
}