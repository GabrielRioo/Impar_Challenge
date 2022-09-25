using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.src.Database.Domain;

namespace backend.src.Database.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly VehiclesContext _db;

        public CarRepository(VehiclesContext db) => _db = db;

        public IQueryable<Car> GetAll()
        {
            return _db.Cars?.AsQueryable();
        }

        public Car GetById(Guid Id)
        {
            return _db.Cars?.SingleOrDefault(q => q.Id == Id);
        }

        public Car Save(Car entity)
        {
            // Se o Id nao tiver valor
            if (!entity.Id.HasValue)
            {
                // Criar um novo ID e salvar no banco de dados
                entity.Id = Guid.NewGuid();
                //entity.Photo.Id = Guid.NewGuid();
                _db.Cars?.Add(entity);
            }

            _db.SaveChanges();

            return entity;
        }
    }
}
