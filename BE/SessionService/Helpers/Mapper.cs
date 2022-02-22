using System.Collections.Generic;
using SessionService.Models;

namespace SessionService.Helpers
{
    public class Mapper
    {
        public static CartDTO Map(Cart cart)
        {
            var cartlines = new List<CartLineDTO>();
            if (cart.CartLines == null) return new CartDTO();
            foreach (var cartline in cart.CartLines)
            {
                cartlines.Add(new CartLineDTO() { Product = new ProductDTO() { Id = cartline.Product.ReferenceId }, Qty = cartline.Qty });
            }
            if (cartlines.Count > 0)
                return new CartDTO() { CartLines = cartlines };
            return new CartDTO();
        }

        public static Cart Map(CartDTO cart)
        {
            var cartlines = new List<CartLine>();
            foreach (var cartline in cart.CartLines)
            {
                cartlines.Add(new CartLine() { Product = new Product() { ReferenceId = cartline.Product.Id }, Qty = cartline.Qty });
            }
            return new Cart() { CartLines = cartlines };
        }
    }
}