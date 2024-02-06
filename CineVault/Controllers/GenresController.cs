using CineVault.Models;
using CineVault.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CineVault.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GenresController : Controller
    {
        private readonly IGenreRepository _repository;
        public GenresController(IGenreRepository genreRepository)
        {
            _repository = genreRepository;            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genre>>> Get()
        {
            IEnumerable<Genre> genres = await _repository.Get();
            if (genres != null)
            {
                return Ok(genres);
            }
                return BadRequest();
        }

        [HttpGet("{id:int}",Name ="GetGenre")]
        public async Task<ActionResult> GetId(int id)
        {
            Genre genre = await _repository.GetById(id);
            if (genre != null)
            {
                return Ok(genre);
            }
                return BadRequest();
        }

        [HttpPost]
        public async Task<ActionResult> Post(Genre genre)
        {            
            if (genre != null || !String.IsNullOrEmpty(genre.ToString()))
            {
                await _repository.Post(genre);
                return new CreatedAtRouteResult("GetGenre", new { id = genre.GenreId }, genre);
            }
            return BadRequest();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Genre>> Put(int id ,Genre genre)
        {
            if (genre.GenreId == id)
            {
                await _repository.Put(genre);
                return Ok(genre);
            }
            return BadRequest();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await _repository.GetById(id);
            await _repository.Delete(genre);

            return Ok();
        }

    }
}
