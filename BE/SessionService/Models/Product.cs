using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SessionService.Models
{
    public class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string ReferenceId { get; set; }
        //public ICollection<CartLine> CartLines { get; set; }
        public Product()
        {
            // EF  
        }
    }
}