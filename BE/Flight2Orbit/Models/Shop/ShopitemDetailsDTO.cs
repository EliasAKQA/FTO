namespace Flight2Orbit.Models
{
    public class ShopitemDetailsDTO
    {
        public ShopItemDTO Overview { get; set; }
        public string Description { get; set; }
        public CrewMemberDTO Discoverer { get; set; }
        public Dimensions Dimensions { get; set; }
        public ShopitemDetailsDTO(ShopItemDTO overview, string description, CrewMemberDTO discoverer, Dimensions dimensions)
        {
            Overview = overview;
            Description = description;
            Discoverer = discoverer;
            Dimensions = dimensions;
        }
    }
}