import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const url = "https://localhost:7148/Movies";

  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState({
    movieId: ""
  });

  const moviePut = async () => {
    movieData.releaseYear = parseInt(movieData.releaseYear);
    movieData.genreId = parseInt(movieData.genreId);
    movieData.movieId = parseInt(movieData.movieId);

    await axios.put(url + "/" + movieData.movieId, movieData).then((res) => {
      var response = res.data;
      var auxData = data;

      auxData.map((e) => {
        if (e.movieId === movieData.movieId) {
          e.movieId = response.movieId
          e.title = response.title;
          e.overview = response.overview;
          e.director = response.director;
          e.releaseYear = response.releaseYear;
          e.genreId = response.genreId;
        }
      });
      console.log("auiiiiiiiii")
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
    console.log(movieData);
  };
  return (
    <>
      <h1>UPDATE</h1>
      <p>Informe os novos dados</p>
      <div>
        <div >
            <div>
              <div>
                <label for="movieId">ID </label>
                <input
                  type="text"
                  name="movieId"
                  id="movieId"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label for="title">TITLE </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label for="overview">OVERVIEW </label>
              <input
                type="text"
                name="overview"
                id="overview"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label for="director">DIRECTOR </label>
              <input
                type="text"
                name="director"
                id="director"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label for="releaseYear">RELEASE YEAR </label>
              <input
                type="text"
                name="releaseYear"
                id="releaseYear"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label for="genreId">GENRE ID </label>
              <input
                type="text"
                name="genreId"
                id="genreId"
                onChange={handleChange}
                required
              />
            </div>
            <input type="submit" value="Editar" onClick={moviePut} />
        </div>
      </div>
    </>
  );
};

export default Update;
