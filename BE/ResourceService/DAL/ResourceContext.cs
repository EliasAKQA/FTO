using System.Data.Entity;
using ResourceService.Models;

namespace ResourceService.DAL
{
    public class ResourceContext : DbContext
    {
        public ResourceContext() : base("ResourceContext")
        {
        }

        public DbSet<Resource> Resources { get; set; }
    }
}