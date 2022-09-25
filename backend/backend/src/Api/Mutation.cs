using backend.src.Business.Handlers;
using backend.src.Business.Requests;
using backend.src.Business.Response;
using HotChocolate;

namespace backend.src.Api
{
    public class Mutation
    {
        public UpsertCarResponse UpsertCar([Service] IUpsertCarHandler handler, UpsertCarRequest request){
            return handler.Execute(request);
        }
    }
}
