namespace Flight2Orbit.Models.Shared
{
    public class HeaderDTO
    {
        public string LogoUrl { get; set; }
        public string LogoText { get; set; }
        public string MenuOpenUrl { get; set; }
        public string MenuClosedUrl { get; set; }
        public MenuDTO Menu { get; set; }
        public HeaderDTO(string logoUrl, string logoText, string menuOpenUrl, string menuClosedUrl, MenuDTO menu)
        {
            LogoUrl = logoUrl;
            LogoText = logoText;
            MenuOpenUrl = menuOpenUrl;
            MenuClosedUrl = menuClosedUrl;
            Menu = menu;
        }
    }
}