using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Business.Response;

namespace backend.src.Business.Handlers
{
    public interface IGetAllCarsHandler
    {
        CarsResponse Execute();
    }
}
