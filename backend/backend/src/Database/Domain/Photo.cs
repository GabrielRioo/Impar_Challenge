using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.src.Database.Domain
{
    public class Photo
    {
        [Key]
        public Guid Id { get; set; }
        public string? Base64 { get; set; }
    }
}
