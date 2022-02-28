using Flight2Orbit.Models.Inventory;

namespace Flight2Orbit.Extensions
{
    public static class Extensions
    {
        /// <summary>
        /// No longer in use. (Moved to ProxyService).
        /// </summary>
        /// <param name="current"></param>
        /// <param name="incoming"></param>
        public static void Merge(this ResourceDTO current, ResourceDTO incoming)
        {
            if (current != null && incoming != null)
            {
                if (incoming.Type != null)
                {
                    current.Type = incoming.Type;
                }

                if (incoming.Amount > 0)
                {
                    current.Amount = incoming.Amount;
                }
            }
        }
    }
}