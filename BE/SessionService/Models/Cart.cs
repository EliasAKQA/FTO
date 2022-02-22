using System.Collections.Generic;

namespace SessionService.Models
{
    public class Cart
    {
        public string Id { get; set; }

        public ICollection<CartLine> CartLines { get; set; }

        public Cart()
        {
            // EF 
        }
    }
}