using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class HomeDTO
    {
        public int Id { get; set; }
        public IEnumerable<SectionDTO> Sections { get; set; }

        public HomeDTO(int id, IEnumerable<SectionDTO> sections)
        {
            Id = id;
            Sections = sections;
        }
    }
}