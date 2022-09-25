using backend.src.Database.Domain;

namespace backend.src.Database.Repositories
{
    public interface ICarRepository
    {
        IQueryable<Car> GetAll();
        Car GetById(Guid Id);
        Car Save(Car entity);
    }
}
