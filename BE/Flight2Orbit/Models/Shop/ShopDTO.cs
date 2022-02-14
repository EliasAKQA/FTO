using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class ShopDTO
    {
        public int Id { get; set; }
        public string Headline { get; set; }
        public string Description { get; set; }
        public IEnumerable<ShopItemDTO> ShopItems { get; set; }

        public ShopDTO(int id, string headline, string description, IEnumerable<ShopItemDTO> shopItems)
        {
            Id = id;
            Headline = headline;
            Description = description;
            ShopItems = shopItems;
        }
    }
}