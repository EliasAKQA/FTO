namespace Flight2Orbit.Models
{
    public class Dimensions
    {
        public decimal Height { get; set; }
        public decimal Width { get; set; }
        public decimal Depth { get; set; }
        public decimal Weight { get; set; }

        public Dimensions(decimal height, decimal width, decimal depth, decimal weight)
        {
            Height = height;
            Width = width;
            Depth = depth;
            Weight = weight;
        }
    }
}