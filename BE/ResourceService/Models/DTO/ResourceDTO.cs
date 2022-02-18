namespace ResourceService.Models.DTO
{
    public class ResourceDTO
    {
        public string Type { get; set; }
        public double Amount { get; set; }

        public ResourceDTO(string type, double amount)
        {
            Type = type;
            Amount = amount;
        }
    }
}