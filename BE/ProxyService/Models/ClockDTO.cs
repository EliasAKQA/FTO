namespace ProxyService.Models
{
    public class ClockDTO
    {
        public string Headline { get; set; }
        public string ColourCode { get; set; }
        public string HourPresentationText { get; set; }
        public string MinutesPresentationText { get; set; }
        public string SecondsPresentationText { get; set; }

        public ClockDTO(string headline, string colourCode, string hourPresentationText, string minutesPresentationText, string secondsPresentationText)
        {
            Headline = headline;
            ColourCode = colourCode;
            HourPresentationText = hourPresentationText;
            MinutesPresentationText = minutesPresentationText;
            SecondsPresentationText = secondsPresentationText;
        }
    }
}