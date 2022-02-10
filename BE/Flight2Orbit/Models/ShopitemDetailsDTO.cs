namespace Flight2Orbit.Models
{
    public class ShopitemDetailsDTO
    {
        public ShopItemDTO Overview { get; set; }
        public CrewMemberDTO Discoverer { get; set; }
        public Dimensions Dimensions { get; set; }
        public ShopitemDetailsDTO(ShopItemDTO overview, CrewMemberDTO discoverer, Dimensions dimensions)
        {
            Overview = overview;
            Discoverer = discoverer;
            Dimensions = dimensions;
        }
    }
}