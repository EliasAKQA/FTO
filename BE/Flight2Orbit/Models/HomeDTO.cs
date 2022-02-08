using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class HomeDTO
    {
        public IEnumerable<SectionDTO> Sections { get; set; }

        public HomeDTO(IEnumerable<SectionDTO> section)
        {
            Sections = section;
        }
    }
}