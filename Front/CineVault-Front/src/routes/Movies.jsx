import React, { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const url = "https://localhost:7148/Movies";

  const [data, setData] = useState([]);

  const movieGet = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    movieGet();
  }, []);

  return (
    <>
      <h1>MOVIES</h1>

      <table border={1}>
        <tr>
          <th>Title</th>
          <th>Overview</th>
          <th>Director</th>
          <th>Release Year</th>
          <th>Genre</th>
        </tr>
        {data.map((e) => (
          <>
            <tr key={e.movieId}>
              <td className="title-container">{e.title}</td>
              <td className="overview-container">{e.overview}</td>
              <td className="director-container">{e.director}</td>
              <td className="release-year-container">{e.releaseYear}</td>
              <td className="genre-id-container">{e.genreId}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}

export default App;
