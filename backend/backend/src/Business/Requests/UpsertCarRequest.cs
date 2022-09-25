using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Database.Domain;

namespace backend.src.Business.Requests
{
    public class UpsertCarRequest
    {
        public Guid? Id { get; set; }
        public Photo? PhotoId { get; set; }
        public string? Name { get; set; }
        public bool Status { get; set; }
    }
}
