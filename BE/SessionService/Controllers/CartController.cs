using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using SessionService.DAL;
using SessionService.Filters;
using SessionService.Helpers;
using SessionService.Models;
using SessionService.Repository;

namespace SessionService.Controllers
{
    public class CartController : ApiController
    {
        public CartRepository Repos { get; set; }

        public CartController()
        {
            Repos = new CartRepository();
        }

        public IHttpActionResult GetCartItems()
        {
            string sessionId = Request.Properties[SessionIdHandler.SessionIdToken] as string;
            var cart = Repos.GetCart(sessionId);
            return Json(Mapper.Map(cart));
        }
        public IHttpActionResult PostCartItems(CartDTO incomingCart)
        {
            string sessionId = Request.Properties[SessionIdHandler.SessionIdToken] as string;
            var cart = Repos.PostCart(sessionId, Mapper.Map(incomingCart));
            return Json(Mapper.Map(cart));
        }

    }
}