using System.Collections;
using System.Collections.Generic;

namespace SessionService.Models
{
    public class CartDTO
    {
        public IEnumerable<CartLineDTO> CartLines { get; set; }

    }
}