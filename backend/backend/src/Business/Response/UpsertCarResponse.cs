using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Database.Domain;
using FluentValidation.Results;

namespace backend.src.Business.Response
{
    public class UpsertCarResponse
    {
        public UpsertCarResponsePayload Payload { get; set; }
        public List<ValidationFailure> Errors { get; set; }
    }

    // Dados que serão retornados.
    public class UpsertCarResponsePayload {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public Photo? Photo { get; set; }
        public bool Status { get; set; }

    }
}
