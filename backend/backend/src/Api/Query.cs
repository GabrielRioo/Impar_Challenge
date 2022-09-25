using backend.src.Business.Handlers;
using backend.src.Business.Requests;
using backend.src.Business.Response;

namespace backend.src.Api
{
    public class Query
    {
        public CarsResponse GetCars([Service] IGetAllCarsHandler handler)
        {
            return handler.Execute();
        }

        public CarResponse GetCar([Service] IGetByIdCarHandler handler, GetByIdCarRequest request)
        {
            return handler.Execute(request);
        }
    }
}
