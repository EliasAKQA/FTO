using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class CrewMemberDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public string ProfileImageUrl { get; set; }
        public string AutographImageUrl { get; set; }
        public IEnumerable<InfoSectionDTO> InfoSections { get; set; }

        public CrewMemberDTO(int id, string name, string role, string description, string profileImageUrl, string autographImageUrl)
        {
            Id = id;
            Name = name;
            Role = role;
            Description = description;
            ProfileImageUrl = profileImageUrl;
            AutographImageUrl = autographImageUrl;
        }
        public CrewMemberDTO(int id, string name, string role, string description, string profileImageUrl, string autographImageUrl, IEnumerable<InfoSectionDTO> infoSections)
        {
            Id = id;
            Name = name;
            Role = role;
            Description = description;
            ProfileImageUrl = profileImageUrl;
            AutographImageUrl = autographImageUrl;
            InfoSections = infoSections;
        }
    }
}