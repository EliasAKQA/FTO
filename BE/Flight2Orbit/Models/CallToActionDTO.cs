using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models
{
    public class CallToActionDTO
    {
        public string Headline { get; set; }
        public IEnumerable<Paragraph> Paragraphs { get; set; }
        public string ButtonText { get; set; }

        public CallToActionDTO(string headline, IEnumerable<Paragraph> paragraphs, string buttonText)
        {
            Headline = headline;
            Paragraphs = paragraphs;
            ButtonText = buttonText;
        }
    }
}