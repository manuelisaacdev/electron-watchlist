import dayjs, { Dayjs } from "dayjs";
import { Check, Column, Entity } from "typeorm";
import { Duration } from "dayjs/plugin/duration.js";

import Media from "./Media.js";
import AnimeType from "./AnimeType.js";

@Entity({name: 'animes'})
@Check(`"total_episodes" > 0`)
export default class Anime extends Media {

    @Column({name: "anime_type", enum: AnimeType, nullable: false})
    animeType!:  AnimeType;
    
    @Column({name: "total_episodes", type: "int"})
    totalEpisodes!: number;
    
    @Column({name: "duration_per_episide", type: "varchar", length: 50, nullable: false, transformer: {to: (duration:Dayjs) => duration.toISOString(), from: (iso:string) => dayjs.duration(iso)}})
    durationPerEpiside!: Duration;

};
