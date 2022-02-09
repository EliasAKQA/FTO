using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class CrewDTO
    {
        public string Headline { get; set; }
        public string SubHeadline { get; set; }
        public string Description { get; set; }
        public IEnumerable<CrewMemberDTO> CrewMembers { get; set; }
        public CallToActionDTO CallToAction { get; set; }

        public CrewDTO(string headline, string subHeadline, string description, IEnumerable<CrewMemberDTO> crewMembers, CallToActionDTO callToAction)
        {
            Headline = headline;
            SubHeadline = subHeadline;
            Description = description;
            CrewMembers = crewMembers;
            CallToAction = callToAction;
        }
    }
}