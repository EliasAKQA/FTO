using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class CallToActionDTO
    {
        public string Headline { get; set; }
        public IEnumerable<ParagraphDTO> Paragraphs { get; set; }
        public string ButtonText { get; set; }

        public CallToActionDTO(string headline, IEnumerable<ParagraphDTO> paragraphs, string buttonText)
        {
            Headline = headline;
            Paragraphs = paragraphs;
            ButtonText = buttonText;
        }

        public CallToActionDTO()
        {
        }
    }
}