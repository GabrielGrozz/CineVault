using CineVault.Models;

namespace CineVault.Repositories.Interfaces
{
    public interface IGenreRepository
    {
        Task<IEnumerable<Genre>> Get();
        Task<Genre> GetById(int id);
        Task<Genre> Post(Genre genre);
        Task Put(Genre genre);
        Task Delete(Genre genre);
    }
}
