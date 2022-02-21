using System.Collections.Generic;
using System.Data.Entity;
using System.Security.AccessControl;
using SessionService.DAL;
using SessionService.Models;

namespace SessionService.Controllers
{
    public class CartInitializer : DropCreateDatabaseIfModelChanges<CartContext>
    {
        protected override void Seed(CartContext context)
        {
            // dummy data 
            Cart cart = new Cart("483fe37e-3095-463a-8575-2887494e554d");
            context.Cart.Add(cart);
            context.SaveChanges();
        }
    }
}