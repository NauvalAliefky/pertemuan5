import { useState } from "react";
import Movie from "./Movie";
import "./Movies.css";

const Movies = () => {
  const [datas, setDatas] = useState ([
    {
        title: "Judul Film 1",
        year: 2023,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Romance, Drama, Comedy"
    },
        {
        title: "Judul Film 2",
        year: 2025,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Horror"
    },
        {
        title: "Judul Film 3",
        year: 2020,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Fantasy, Comedy"
    },
        {
        title: "Judul Film 4",
        year: 2021,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy"
    },
        {
        title: "Judul Film 5",
        year: 2022,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Drama, Horror, Fantasy, Sci-Fi, Comedy, Thriller"
    },
        {
        title: "Judul Film 6",
        year: 2020,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy, Drama, Horror, Fantasy, Sci-Fi"
    },
        {
        title: "Judul Film 7",
        year: 2018,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy, Drama, Horror, Fantasy"
    },
        {
        title: "Judul Film 8",
        year: 2019,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy, Drama, Horror"
    },
        {
        title: "Judul Film 9",
        year: 2021,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy, Drama"
    },
    {
        title: "Judul Film 10",
        year: 2023,
        poster: "https://piscum.photos/seed/picsum/200/300",
        genre: "Action, Comedy, Drama, Horror, Fantasy, Sci-Fi, Thriller"
    },
  ]);

  const handleClick = () => {
    const newMovie = {
      title: "The Fragrant Flower Blooms with Dignity",
      year: 2025,
      poster: "https://piscum.photos/200/300",
      genre: "Shounen Anime, Japanese, Romance Anime, Teen TV Shows, Anime Series, Drama Anime, School Anime, TV Shows Based on Manga"
    };
    setDatas([...datas, newMovie]);
  }

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