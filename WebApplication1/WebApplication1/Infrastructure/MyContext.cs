using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Entity;

namespace WebApplication1.NewFolder
{
    public class MyContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {
        }


    }
}
