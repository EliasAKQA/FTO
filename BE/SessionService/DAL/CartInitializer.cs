using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Security.AccessControl;
using SessionService.DAL;
using SessionService.Models;

namespace SessionService.DAL
{
    public class CartInitializer : DropCreateDatabaseIfModelChanges<CartContext>
    {
        protected override void Seed(CartContext context)
        {
            // dummy data  
            var sampleCookie = "0cdf8e29-dd51-456f-be19-91797424ddba";
            var product1 = new Product() { ReferenceId = "1073" };
            var product2 = new Product() { ReferenceId = "1183" };
            var product3 = new Product() { ReferenceId = "1191" };

            context.Products.Add(product1);
            context.Products.Add(product2);
            context.Products.Add(product3);
            context.SaveChanges();


            var cline1 = new CartLine() { Product = product1, Qty = 2 };
            var cline2 = new CartLine() { Product = product2, Qty = 1 };
            var cline3 = new CartLine() { Product = product3, Qty = 6 };

            context.SaveChanges();

            var cart = new Cart
            {
                Id = sampleCookie,
                CartLines = new List<CartLine>() { cline1, cline2, cline3 }
            };

            context.Cart.Add(cart);

            context.SaveChanges();
        }
    }
}