using backend.src.Business.Requests;
using backend.src.Business.Response;

namespace backend.src.Business.Handlers
{
    public interface IUpsertCarHandler
    {
        UpsertCarResponse Execute(UpsertCarRequest request);
    }

    
}
