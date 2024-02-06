using CineVault.Context;
using CineVault.Models;
using CineVault.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CineVault.Repositories
{
    public class GenreRepository : IGenreRepository
    {
        private readonly AppDbContext _context;
        public GenreRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Genre>> Get()
        {
            return await _context.Genres.ToArrayAsync();
        }

        public async Task<Genre> GetById(int id)
        {
            var genre = await _context.Genres.FirstOrDefaultAsync(res => res.GenreId == id);
            return genre;
        }

        public async Task<Genre> Post(Genre genre)
        {
            await _context.Genres.AddAsync(genre);
            await _context.SaveChangesAsync();

            return genre;
        }

        public async Task Put(Genre genre)
        {
            _context.Entry(genre).State = EntityState.Modified;
            await _context.SaveChangesAsync();

        }
        public async Task Delete(Genre genre)
        {
            _context.Remove(genre);
            await _context.SaveChangesAsync();
        }
    }
}
