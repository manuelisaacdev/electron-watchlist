import { Entity, JoinColumn, ManyToOne } from "typeorm";

import Movie from "./Movie.js";
import Share from "./Share.js";

@Entity({name: 'shared_movies'})
export default class ShareMovie extends Share {
    
    @ManyToOne(() => Movie)
    @JoinColumn({name: "movie_id"})
    movie!: Movie;

};
