using System.Data.Entity;
using SessionService.Models;

namespace SessionService.DAL
{
    public class CartContext : DbContext
    {
        public CartContext() : base("cartContext")
        {
        }

        public DbSet<Cart> Cart { get; set; }
        public DbSet<Product> Products { get; set; }



    }
}