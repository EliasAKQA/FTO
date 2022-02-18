namespace ResourceService.Models
{
    public class Resource
    {
        public int ID { get; set; }
        public ResourceType Type { get; set; }
        public double Amount { get; set; }

        public int MillisecondsToDepleted => (int)Amount * 50000;

        public Resource(ResourceType type, int amount)
        {
            Type = type;
            Amount = amount;
        }

        public Resource()
        {
            // EF  
        }

        public double CalculatePercentage()
        {
            return Amount / 100;
        }

    }
}