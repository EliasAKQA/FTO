using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models.Inventory
{
    public class InventoryDTO
    {
        public string Headline { get; set; }
        public string SubHeadline { get; set; }
        public string Description { get; set; }
        public ClockDTO Clock { get; set; }
        public IEnumerable<ResourceDTO> Resource { get; set; }
        public CallToActionDTO CTO { get; set; }
        public InventoryDTO(string headline, string subHeadline, string description, ClockDTO clock, IEnumerable<ResourceDTO> resource, CallToActionDTO cto)
        {
            Headline = headline;
            SubHeadline = subHeadline;
            Description = description;
            Clock = clock;
            Resource = resource;
            CTO = cto;
        }
        public InventoryDTO(string headline, string subHeadline, string description, ClockDTO clock, IEnumerable<ResourceDTO> resource)
        {
            Headline = headline;
            SubHeadline = subHeadline;
            Description = description;
            Clock = clock;
            Resource = resource;
        }
    }
}