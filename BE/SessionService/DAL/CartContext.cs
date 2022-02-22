using System.Data.Entity;
using SessionService.Models;

namespace SessionService.DAL
{
    public class CartContext : DbContext
    {
        public CartContext() : base("CartContext")
        {
        }

        public DbSet<Cart> Cart { get; set; }
        public DbSet<CartLine> CartLine { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}