using System.Collections.Generic;

namespace SessionService.Models
{
    public sealed class Cart
    {
        public string Id { get; set; }
        public IEnumerable<Product> Products { get; set; }

        public Cart(string id, IEnumerable<Product> products)
        {
            Id = id;
            Products = products;
        }
        public Cart(string id)
        {
            Id = id;
        }

        public Cart()
        {
            // EF
        }
    }
}