using backend.src.Business.Requests;
using FluentValidation;

namespace backend.src.Business.Validators
{
    public class CarValidator : AbstractValidator<UpsertCarRequest>, ICarValidator
    {
        public CarValidator()
        {
            RuleFor(t => t.Name)
                .NotEmpty()
                .NotNull();
        }
    }
}
