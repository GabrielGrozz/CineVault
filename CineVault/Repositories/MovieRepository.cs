using CineVault.Context;
using CineVault.Models;
using CineVault.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace CineVault.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly AppDbContext _context;

        public MovieRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Movie>> Get()
        {
           return await _context.Movies.ToListAsync();
        }

        public async Task<Movie> GetById(int id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(res => res.MovieId == id);
            return movie;
        }

        public async Task<Movie> GetByTitle(string title)
        {            
            //var movie = await _context.Movies.FirstOrDefaultAsync(res => res.MovieId == 4);
            var movie = await _context.Movies.FirstOrDefaultAsync(res => res.Title.Contains(title));
            return movie;

        }
        public async Task Post(Movie movie)
        {
            await _context.Movies.AddAsync(movie);
            await _context.SaveChangesAsync();
        }

        public async Task Put(Movie movie)
        {
            _context.Entry(movie).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Movie movie)
        {
            _context.Remove(movie);
            await _context.SaveChangesAsync();
        }


    }
}
