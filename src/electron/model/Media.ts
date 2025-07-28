import { BaseEntity, Check, Column, CreateDateColumn, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import Genre from "./Genre.js";
import Trailer from "./Trailer.js";
import MediaType from "./MediaType.js";

@Check(`"classification" BETWEEN 1 AND 18`)
export default abstract class Media extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({length: 100, nullable: false})
    title!: string;

    thumbnail?: string;

    @Column({type: "text"})
    sinopse?: string;

    @Column({nullable: false, default: true})
    available!:  boolean;

    @Column({nullable: false, default: 1})
    rating!: number;

    @Column({name: "year_release"})
    yearRelease?: number;

    @Column()
    classification?: number;

    @Column({name: "media_type", enum: MediaType, nullable: false})
    mediaType!:  MediaType;

    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @UpdateDateColumn({name: "update_at", nullable: false})
    updateAt!: Date;

    @ManyToOne(() => Genre)
    @JoinColumn({name: "main_genre_id"})
    mainGenre!: Genre;

    @JoinTable()
    @ManyToMany(() => Genre, {eager: true})
    genres!: Genre[];

    @JoinTable()
    @ManyToMany(() => Trailer, {eager: true})
    trailers?: Trailer[];
};
