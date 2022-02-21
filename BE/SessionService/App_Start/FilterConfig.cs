using System.Web;
using System.Web.Mvc;
using SessionService.Filters;

namespace SessionService
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
