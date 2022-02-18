using System.Collections.Generic;

namespace ProxyService.Models
{
    public class ResourcesDTO
    {
        public IEnumerable<ResourceDTO> Resources { get; set; }
        public int MillisecondsToDeath { get; set; }
        public ResourcesDTO(IEnumerable<ResourceDTO> resources, int millisecondsToDeath)
        {
            Resources = resources;
            MillisecondsToDeath = millisecondsToDeath;
        }

        public ResourcesDTO()
        {
        }
    }
}