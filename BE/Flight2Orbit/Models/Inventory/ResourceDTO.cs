namespace Flight2Orbit.Models.Inventory
{
    public class ResourceDTO
    {
        public string Title { get; set; }
        public string ColourCode { get; set; }
        public string Type { get; set; }
        public int Amount { get; set; }

        public ResourceDTO(string type, int amount)
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