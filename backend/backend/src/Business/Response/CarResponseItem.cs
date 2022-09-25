using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.src.Business.Response
{
    public class CarResponseItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid PhotoId { get; set; }
        public bool Status { get; set; }
    }
}
