using ProxyService.Models;

namespace ProxyService.Extensions
{
    public static class DtoExtensions
    {
        public static void Merge(this ResourceDTO umbracoService, ResourceDTO resourceService)
        {
            if (umbracoService != null && resourceService != null)
            {
                if (resourceService.Type != null)
                {
                    umbracoService.Type = resourceService.Type;
                }

                if (resourceService.Amount > 0)
                {
                    umbracoService.Amount = resourceService.Amount;
                }
            }
        }
    }
}