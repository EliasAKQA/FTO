using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class CrewDTO
    {
        public int ID { get; set; }
        public string Headline { get; set; }
        public string SubHeadline { get; set; }
        public string Description { get; set; }
        public IEnumerable<CrewMemberDTO> CrewMembers { get; set; }
        public CallToActionDTO CallToAction { get; set; }

        public CrewDTO(int id, string headline, string subHeadline, string description, IEnumerable<CrewMemberDTO> crewMembers, CallToActionDTO callToAction)
        {
            ID = id;
            Headline = headline;
            SubHeadline = subHeadline;
            Description = description;
            CrewMembers = crewMembers;
            CallToAction = callToAction;
        }
        public CrewDTO(int id, string headline, string subHeadline, string description, IEnumerable<CrewMemberDTO> crewMembers)
        {
            ID = id;
            Headline = headline;
            SubHeadline = subHeadline;
            Description = description;
            CrewMembers = crewMembers;
        }
    }
}