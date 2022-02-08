namespace Flight2Orbit.Models
{
    public class ButtonDTO
    {
        public string Content { get; set; }
        public string Url { get; set; }

        public ButtonDTO(string content, string url)
        {
            Content = content;
            Url = url;
        }
    }
}