namespace SessionService.Models
{
    public class Product
    {
        public string Id { get; set; }

        public Product(string id)
        {
            Id = id;
        }

        public Product()
        {
            // EF 
        }
    }
}