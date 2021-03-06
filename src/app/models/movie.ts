export const baseURL = 'http://localhost:3000/';

export interface Search {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string,
    Ratings: Rating[]
}

export class Movie {
    Title: string;
    Year: number;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: number;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean
}

export interface Rating {
    imdbID: string;
    Title: string;
    Rating: number;
    Review: string;
}