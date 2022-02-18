namespace Flight2Orbit.Models.Tracker
{
    public class TrackerDTO
    {
        public string Headline { get; set; }
        public string Location { get; set; }
        public string Speed { get; set; }
        public string Timestamp { get; set; }
        public CallToActionDTO CallToAction { get; set; }

        public TrackerDTO(string headline, string location, string speed, string timestamp, CallToActionDTO callToAction)
        {
            Headline = headline;
            Location = location;
            Speed = speed;
            Timestamp = timestamp;
            CallToAction = callToAction;
        }
    }
}