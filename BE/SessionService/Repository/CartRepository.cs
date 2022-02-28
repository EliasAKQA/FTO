using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web.Mvc.Html;
using SessionService.DAL;
using SessionService.Models;

namespace SessionService.Repository
{
    public class CartRepository
    {
        public CartContext Context { get; set; }

        public CartRepository()
        {
            Context = new CartContext();
        }

        public Cart GetCart(string id)
        {

            var cart = Context.Cart
                .Include(c => c.CartLines)
                .Include((c) => c.CartLines.Select(p => p.Product))
                .FirstOrDefault(c => c.Id == id);
            if (cart == null) return CreateCart(id);
            return cart;
        }

        public Cart PostCart(string id, Cart incomingCart)
        {
            var cart = GetCart(id);

            // Cart should never be null - as GetCart creates new cart if none exist. 
            if (cart == null) return CreateCart(id, incomingCart);

            // Update cart with the incoming values.
            cart.CartLines = incomingCart.CartLines;
            Context.SaveChanges();
            return cart;
        }

        public Cart CreateCart(string id)
        {
            // Create empty cart with given ID.
            var newCart = new Cart() { Id = id };
            Context.Cart.Add(newCart);
            Context.SaveChanges();
            return newCart;
        }

        private Cart CreateCart(string id, Cart incomingCart)
        {
            // Add incoming cart to the DB, with given ID.
            incomingCart.Id = id;
            Context.Cart.Add(incomingCart);
            Context.SaveChanges();
            return incomingCart;
        }
    }
}