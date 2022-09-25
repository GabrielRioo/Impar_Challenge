using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Business.Requests;
using backend.src.Business.Response;
using backend.src.Business.Validators;
using backend.src.Database.Domain;
using backend.src.Database.Repositories;

namespace backend.src.Business.Handlers
{
    public class UpsertCarHandler : IUpsertCarHandler
    {
        private readonly ICarRepository _repository;
        private readonly ICarValidator _validator;
        public UpsertCarHandler(ICarRepository repository, ICarValidator validator)
        {
            _repository = repository;
            _validator = validator;
        }

        public UpsertCarResponse Execute(UpsertCarRequest request)
        {
            var validatorResult = _validator.Validate(request);
            if (!validatorResult.IsValid)
            {
                return new UpsertCarResponse {
                    Errors = validatorResult.Errors
                };
            }
            
            Car entity;
            if (request.Id.HasValue)
            {
                entity = _repository.GetById(request.Id.Value);
                if (entity == null)
                    throw new Exception("Carro não encontrado");
            }
            else {
                entity = new Car();
            }

            entity.Name = request.Name;
            //entity.Photo = Guid.NewGuid();
            entity.Status = request.Status;
            
            _repository.Save(entity);

            return new UpsertCarResponse {
                Payload = new UpsertCarResponsePayload {
                    Id = entity.Id.Value,
                    Name = entity.Name,
                    Photo = request.PhotoId,
                    Status = entity.Status
                }
            };
        }
    }
}
