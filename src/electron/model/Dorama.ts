import dayjs, { Dayjs } from "dayjs";
import { Check, Column, Entity } from "typeorm";
import { Duration } from "dayjs/plugin/duration.js";

import Media from "./Media.js";

@Entity({name: 'series'})
@Check(`"total_episodes" > 0`)
export default class Dorama extends Media {
    
    @Column({name: "total_episodes", type: "int"})
    totalEpisodes!: number;
    
    @Column({name: "duration_per_episide", type: "varchar", length: 50, nullable: false, transformer: {to: (duration:Dayjs) => duration.toISOString(), from: (iso:string) => dayjs.duration(iso)}})
    durationPerEpiside!: Duration;
    
};
