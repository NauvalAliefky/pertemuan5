import { useState } from "react";
import Movie from "./Movie.jsx";
import "./Movies.css";

const Movies = () => {
  const [datas, setDatas] = useState([
    {
      title: "Judul Film 1",
      year: 2021,
      poster: "https://picsum.photos/200/300",
      genre: "Horror",
    },
    {
      title: "Judul Film 2",
      year: 2020,
      poster: "https://picsum.photos/200",
      genre: "Action",
    },
    {
      title: "Judul Film 3",
      year: 2014,
      poster: "https://picsum.photos/200",
      genre: "Romance",
    },
    {
      title: "Judul Film 4",
      year: 2023,
      poster: "https://picsum.photos/200",
      genre: "Comedy",
    },
    {
      title: "Judul Film 5",
      year: 2022,
      poster: "https://picsum.photos/200",
      genre: "Thriller",
    },
    {
      title: "Judul Film 6",
      year: 2014,
      poster: "https://picsum.photos/200",
      genre: "Action",
    },
    {
      title: "Judul Film 7",
      year: 2017,
      poster: "https://picsum.photos/200",
      genre: "Horror",
    },
    {
      title: "Judul Film 8",
      year: 2018,
      poster: "https://picsum.photos/200",
      genre: "Romance",
    },
  ]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "https://picsum.photos/200",
      genre: "Action",
    };
    setDatas([...datas, movie]);
  };

  console.log(datas);

  return (
    <div className="container">
      <h1>Koleksi Film</h1>
      <div className="movies-grid">
        {datas.map((data, index) => (
          <Movie
            title={data.title}
            year={data.year}
            poster={data.poster}
            genre={data.genre}
            key={`${data.title}-${index}`}
          />
        ))}
      </div>
      <button onClick={handleClick}>Add Movie</button>
    </div>
  );
};

export default Movies;
