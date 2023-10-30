using BlogAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlogAPI.Data
{
    public class BlogDbContext: DbContext //BlogDbContext will inherite (DbContext) file from microsoft.entityframworkcore
    {
        public BlogDbContext(DbContextOptions options):base(options) //construstor (We are passing the constructor to the base class which is DbContext)
        {

        }    

        //DbSet
        public DbSet<Post> Posts { get; set; } // When we run migration, This property will create the table in the Database
    }
}
