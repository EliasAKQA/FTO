namespace Flight2Orbit.Models
{
    public class ShopItemDTO
    {
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public ButtonDTO Button { get; set; }

        public ShopItemDTO(string imageUrl, string title, double price, ButtonDTO button)
        {
            ImageUrl = imageUrl;
            Title = title;
            Price = price;
            Button = button;
        }
    }
}