using CineVault.Models;
using Microsoft.AspNetCore.Mvc;

namespace CineVault.Repositories.Interfaces
{
    public interface IMovieRepository
    {
        Task<IEnumerable<Movie>> Get();
        Task<Movie> GetById(int id);
        Task<Movie> GetByTitle(string title);
        Task Post(Movie movie);
        Task Put(Movie movie);
        Task Delete(Movie movie);
    }
}
