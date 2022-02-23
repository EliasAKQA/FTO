namespace Flight2Orbit.Models
{
    public class ShopItemOverviewDTO
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }

        public ShopItemOverviewDTO(int id, string imageUrl, string title, double price)
        {
            Id = id;
            ImageUrl = imageUrl;
            Title = title;
            Price = price;
        }
    }
}