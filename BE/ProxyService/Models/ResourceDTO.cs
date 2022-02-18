namespace ProxyService.Models
{
    public class ResourceDTO
    {
        public string Title { get; set; }
        public string ColourCode { get; set; }
        public string Type { get; set; }
        public double Amount { get; set; }

        public ResourceDTO(string type, double amount)
        {
            Type = type;
            Amount = amount;
        }

        public ResourceDTO(string title, string colourCode)
        {
            Title = title;
            ColourCode = colourCode;
        }

        public ResourceDTO()
        {
        }
    }
}