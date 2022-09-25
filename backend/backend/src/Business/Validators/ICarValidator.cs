using backend.src.Business.Requests;
using FluentValidation;

namespace backend.src.Business.Validators
{
    public interface ICarValidator : IValidator<UpsertCarRequest>
    {
        
    }
}
