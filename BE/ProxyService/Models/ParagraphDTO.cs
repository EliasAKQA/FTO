namespace ProxyService.Models
{
    public class ParagraphDTO
    {
        public string Text { get; set; }

        public ParagraphDTO(string text)
        {
            Text = text;
        }
    }
}