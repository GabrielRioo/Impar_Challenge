using backend.src.Business.Response;
using backend.src.Database.Repositories;

namespace backend.src.Business.Handlers
{
    public class GetAllCarsHandler : IGetAllCarsHandler
    {
        private readonly ICarRepository _repository;
        public GetAllCarsHandler(ICarRepository repository)
        {
            _repository = repository;
        }
        public CarsResponse Execute()
        {
            var cars = _repository.GetAll()
                .Select(x => new CarResponseItem {
                    Id = x.Id.Value,
                    Name = x.Name,
                    PhotoId = x.Photo,
                    Status = x.Status
                })
                .ToList();

            return new CarsResponse {
                Payload = cars
            };

        }
    }
}
