namespace Flight2Orbit.Models
{
    public class ShopItemDTO
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public ButtonDTO Button { get; set; }

        public ShopItemDTO(int id, string imageUrl, string title, double price, ButtonDTO button)
        {
            Id = id;
            ImageUrl = imageUrl;
            Title = title;
            Price = price;
            Button = button;
        }
    }
}