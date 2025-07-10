// Mock movie data for initial development
export const popularMovies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    vote_average: 8.2,
    release_date: "2023-05-05",
    genre_ids: [28, 12, 35]
  },
  {
    id: 2,
    title: "Spider-Man: Across the Spider-Verse",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    vote_average: 8.6,
    release_date: "2023-06-02",
    genre_ids: [16, 28, 12]
  },
  {
    id: 3,
    title: "Fast X",
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    vote_average: 7.2,
    release_date: "2023-05-19",
    genre_ids: [28, 80, 53]
  },
  {
    id: 4,
    title: "The Little Mermaid",
    poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    vote_average: 7.1,
    release_date: "2023-05-26",
    genre_ids: [14, 10751, 10749]
  },
  {
    id: 5,
    title: "John Wick: Chapter 4",
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    vote_average: 7.8,
    release_date: "2023-03-24",
    genre_ids: [28, 53, 80]
  },
  {
    id: 6,
    title: "Transformers: Rise of the Beasts",
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    vote_average: 7.4,
    release_date: "2023-06-09",
    genre_ids: [28, 12, 878]
  },
  {
    id: 7,
    title: "Indiana Jones and the Dial of Destiny",
    poster_path: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    vote_average: 6.9,
    release_date: "2023-06-30",
    genre_ids: [28, 12]
  },
  {
    id: 8,
    title: "The Flash",
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    vote_average: 6.8,
    release_date: "2023-06-16",
    genre_ids: [28, 12, 878]
  },
  {
    id: 9,
    title: "Oppenheimer",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    vote_average: 8.4,
    release_date: "2023-07-21",
    genre_ids: [18, 36]
  },
  {
    id: 10,
    title: "Barbie",
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    vote_average: 7.3,
    release_date: "2023-07-21",
    genre_ids: [35, 14]
  },
  {
    id: 11,
    title: "Mission: Impossible – Dead Reckoning Part One",
    poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    vote_average: 7.6,
    release_date: "2023-07-12",
    genre_ids: [28, 53]
  },
  {
    id: 12,
    title: "Avatar: The Way of Water",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    vote_average: 7.7,
    release_date: "2022-12-16",
    genre_ids: [878, 12, 14]
  }
];

export const nowPlayingMovies = [
  {
    id: 13,
    title: "The Nun II",
    poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    vote_average: 6.4,
    release_date: "2023-09-08",
    genre_ids: [27, 9648, 53]
  },
  {
    id: 14,
    title: "A Haunting in Venice",
    poster_path: "/1Xgjl22MkAZQUavvOeBqRehrvqO.jpg",
    vote_average: 6.8,
    release_date: "2023-09-15",
    genre_ids: [80, 9648, 53]
  },
  {
    id: 15,
    title: "The Equalizer 3",
    poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    vote_average: 7.3,
    release_date: "2023-09-01",
    genre_ids: [28, 80, 53]
  },
  {
    id: 16,
    title: "Blue Beetle",
    poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    vote_average: 7.0,
    release_date: "2023-08-18",
    genre_ids: [28, 12, 878]
  },
  {
    id: 17,
    title: "Gran Turismo",
    poster_path: "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    vote_average: 7.9,
    release_date: "2023-08-25",
    genre_ids: [18, 28]
  },
  {
    id: 18,
    title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    poster_path: "/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
    vote_average: 7.6,
    release_date: "2023-08-02",
    genre_ids: [16, 28, 35]
  }
];

export const trendingMovies = popularMovies.slice(0, 8);