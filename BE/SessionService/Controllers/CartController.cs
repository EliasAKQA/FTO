using System.Data.Entity;
using System.Net.Http;
using System.Web.Http;
using SessionService.DAL;
using SessionService.Filters;

namespace SessionService.Controllers
{
    public class CartController : ApiController
    {
        //public CartContext Context { get; set; }

        //public CartController(CartContext context)
        //{
        //    Context = context; 
        //} 

        public IHttpActionResult GetCartItems()
        {
            //Context.Cart.Load(); 
            string sessionId = Request.Properties[SessionIdHandler.SessionIdToken] as string;

            return Json(sessionId);
        }
    }
}