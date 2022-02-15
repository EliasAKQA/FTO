namespace Flight2Orbit.Models.Shared
{
    public class MenuItemDTO : MenuContainer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Link { get; set; }

        public MenuItemDTO(int id, string text, string link)
        {
            Id = id;
            Text = text;
            Link = link;
        }
    }
}