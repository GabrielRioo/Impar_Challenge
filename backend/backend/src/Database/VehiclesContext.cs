using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Database.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.src.Database
{
    public class VehiclesContext : DbContext
    {
        public DbSet<Car>? Cars { get; set; }
        public DbSet<Photo>? Photos { get; set; }

         public VehiclesContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            // configurações
            base.OnModelCreating(modelBuilder);
        }
    }
}
