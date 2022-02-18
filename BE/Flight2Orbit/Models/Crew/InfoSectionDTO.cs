namespace Flight2Orbit.Models
{
    public class InfoSectionDTO
    {
        public string Title { get; set; }
        public string Content { get; set; }

        public InfoSectionDTO(string title, string content)
        {
            Title = title;
            Content = content;
        }

    }
}