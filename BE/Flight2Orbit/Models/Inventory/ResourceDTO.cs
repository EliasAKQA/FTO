namespace Flight2Orbit.Models.Inventory
{
    public class ResourceDTO
    {
        public string Title { get; set; }
        public string ColourCode { get; set; }

        public ResourceDTO(string title, string colourCode)
        {
            Title = title;
            ColourCode = colourCode;
        }
    }
}