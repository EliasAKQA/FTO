namespace Flight2Orbit.Models.Shared
{
    public class MenuItemDTO : MenuContainer
    {
        public string Text { get; set; }
        public string Link { get; set; }

        public MenuItemDTO(string text, string link)
        {
            Text = text;
            Link = link;
        }
    }
}