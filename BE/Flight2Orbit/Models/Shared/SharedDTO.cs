namespace Flight2Orbit.Models.Shared
{
    public class SharedDTO
    {
        public string FaviconUrl { get; set; }
        public string PageTitle { get; set; }

        public SharedDTO(string faviconUrl, string pageTitle)
        {
            FaviconUrl = faviconUrl;
            PageTitle = pageTitle;
        }
    }
}