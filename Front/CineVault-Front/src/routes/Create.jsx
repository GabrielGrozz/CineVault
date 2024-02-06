import React, { useEffect, useState } from "react";
import axios from "axios";

const Create = () => {
  const url = "https://localhost:7148/Movies";

  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState({
    movieId: "",
    title: "",
    overview: "",
    director: "",
    releaseYear: "",
    genreId: "",
  });

  const moviePost = async () => {
    movieData.releaseYear = parseInt(movieData.releaseYear);
    movieData.genreId = parseInt(movieData.genreId);

    await axios.post(url, movieData).then((res) => {
      setData(data.concat(res.data));
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
      <h1>CREATE</h1>

      <div>
        <form>
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
          <input type="submit" value="Adicionar" onClick={moviePost} />
        </form>
      </div>
    </>
  );
};

export default Create;
