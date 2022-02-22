using System.Collections.Generic;

namespace ProxyService.Models.Cart
{
    public class CartDTO
    {
        public IEnumerable<CartLineDTO> CartLines { get; set; }

    }
}