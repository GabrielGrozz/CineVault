import React, { useEffect, useState } from "react";
import axios from "axios";

const Delete = () => {
  const url = "https://localhost:7148/Movies";

  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState({
    movieId: ""
  });

  const movieDelete = async () => {
    movieData.movieId = parseInt(movieData.movieId);

    await axios.delete(url + "/" + movieData.movieId).then((res) => {
      setData(data.filter(movie => movie.id !== res.data))

      console.log("auiiiiiiiii");
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
      <p>Informe o Id do filme que irá ser deletado</p>

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

      <input type="submit" value="Excluir" onClick={() => movieDelete()} />
    </>
  );
};

export default Delete;
