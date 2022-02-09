using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class ShopDTO
    {
        public string Headline { get; set; }
        public string Description { get; set; }
        public IEnumerable<ShopItemDTO> ShopItems { get; set; }

        public ShopDTO(string headline, string description, IEnumerable<ShopItemDTO> shopItems)
        {
            Headline = headline;
            Description = description;
            ShopItems = shopItems;
        }
    }
}