using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.src.Database.Domain
{
    public class Car
    {
        [Key]
        public Guid? Id { get; set; }
        [ForeignKey("PhotoFK")]
        public Photo? Photo { get; set; }
        public string? Name { get; set; }
        public bool Status { get; set; }
    }
}
