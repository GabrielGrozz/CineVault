namespace CineVault.Models
{
    public class Movie
    {
        public int? MovieId {get; set;}
        public string? Title { get; set;}
        public string? Overview { get; set;}
        public string? Director { get; set;}
        public int? ReleaseYear { get; set;}
        public int? GenreId { get; set;}
        public Genre? Genre { get; set;}
        
    }
}
