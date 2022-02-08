namespace Flight2Orbit.Models
{
    public class SectionDTO
    {
        public string Header { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public ButtonDTO Button { get; set; }
        public SectionDTO(string header, string description, string imageUrl, ButtonDTO button)
        {
            Header = header;
            Description = description;
            ImageUrl = imageUrl;
            Button = button;
        }

    }
}