using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Business.Requests;
using backend.src.Business.Response;
using backend.src.Database.Repositories;

namespace backend.src.Business.Handlers
{
    public class GetByIdCarHandler : IGetByIdCarHandler
    {
        private readonly ICarRepository _repository;
        public GetByIdCarHandler(ICarRepository repository)
        {
            _repository = repository;
        }
        public CarResponse Execute(GetByIdCarRequest request)
        {
            var car = _repository.GetById(request.Id);
            if (car == null)
                throw new Exception("Carro não encontrado");

            return new CarResponse {
                Payload = new CarResponseItem {
                    Id = car.Id.Value,
                    Name = car.Name,
                    PhotoId = car.Photo,
                    Status = car.Status
                }
            };
        }
    }
}
