using CineVault.Context;
using CineVault.Models;
using CineVault.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineVault.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {

        private readonly IMovieRepository movieRepository;

        public MoviesController(IMovieRepository repository)
        {
            movieRepository = repository;
        }

        //todos os filmes
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Movie>>> Get()
        {
            IEnumerable<Movie> movies = await movieRepository.Get();
            if (movies != null)
            {
                return Ok(movies);
            }

                return BadRequest();
        }

        //filme por id
        [HttpGet("{id:int}", Name = "GetMovie")]
        public async Task<ActionResult<Movie>> Get(int id)
        {
            Movie movie = await movieRepository.GetById(id);
            if (movie != null)
            {
                return Ok(movie);
            }

                return BadRequest("ID inválido");
        }

        //filme por nome
        [HttpGet("Name")]
        public async Task<ActionResult<Movie>> GetByTitle([FromQuery]string title)
        {
            var movie = await movieRepository.GetByTitle(title);
            if (movie == null)
            {
                return BadRequest("teset");
            }

            return Ok(movie);
        }

        //adiciona um filme
        [HttpPost]
        public async Task<ActionResult> Post(Movie movie)
        {
            if (movie == null || String.IsNullOrEmpty(movie.ToString()))
            {
                return BadRequest("O filme informado Possui um campo inválido");
            }

            await movieRepository.Post(movie);

            return new CreatedAtRouteResult("GetMovie", new { id = movie.MovieId }, movie);
        }

        //atualiza um filme
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Movie>> Put(int id, Movie movie)
        {

            if (movie.MovieId == id)
            {
                await movieRepository.Put(movie);
                return Ok("Filme Adiciona com sucesso!");
            }

            return BadRequest("Id inválido");
        }

        //deleta um filme
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            Movie movie = await movieRepository.GetById(id);
            await movieRepository.Delete(movie);

            return Ok($"O filme {movie.Title} foi removido com sucesso!");
        }        
    }
}