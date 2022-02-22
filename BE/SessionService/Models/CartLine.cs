using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace SessionService.Models
{
    public class CartLine
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public virtual Cart Cart { get; set; }
        public virtual Product Product { get; set; }
        public int Qty { get; set; }

        public CartLine()
        {
            // EF
        }
    }
}