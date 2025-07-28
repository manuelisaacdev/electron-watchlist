import { Duration } from "dayjs/plugin/duration.js";
import Media from "./Media.js";
import { Column, Entity } from "typeorm";
import dayjs, { Dayjs } from "dayjs";

@Entity({name: 'movies'})
export default class Movie extends Media {
    
    @Column({type: "varchar", length: 50, nullable: false, transformer: {to: (duration:Dayjs) => duration.toISOString(), from: (iso:string) => dayjs.duration(iso)}})
    duration!: Duration;

};
