import { Entity, JoinColumn, ManyToOne } from "typeorm";

import Share from "./Share.js";
import Anime from "./Anime.js";

@Entity({name: 'shared_animes'})
export default class ShareAnime extends Share {
    
    @ManyToOne(() => Anime)
    @JoinColumn({name: "anime_id"})
    anime!: Anime;

};
