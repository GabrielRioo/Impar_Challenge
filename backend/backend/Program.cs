using backend.src.Api;
using backend.src.Business.Handlers;
using backend.src.Business.Validators;
using backend.src.Database;
using backend.src.Database.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>();

builder.Services.AddDbContext<VehiclesContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services
    // Validators
    .AddScoped<ICarValidator, CarValidator>()

    // Repositories
    .AddScoped<ICarRepository, CarRepository>()

    // Business Rules
    .AddScoped<IUpsertCarHandler, UpsertCarHandler>()
    .AddScoped<IGetAllCarsHandler, GetAllCarsHandler>()
    .AddScoped<IGetByIdCarHandler, GetByIdCarHandler>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapGraphQL("/graphql");
// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

//app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapControllers();

app.Run();
