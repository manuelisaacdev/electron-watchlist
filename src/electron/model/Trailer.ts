import dayjs, { Dayjs } from "dayjs";
import { Duration } from "dayjs/plugin/duration.js";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'trailers'})
export default class Trailer extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({length: 100, nullable: false})
    title!: string;
    
    @Column({type: "text", nullable: false})
    video!: string;

    @Column({type: "varchar", length: 50, nullable: false, transformer: {to: (duration:Dayjs) => duration.toISOString(), from: (iso:string) => dayjs.duration(iso)}})
    duration!: Duration;

    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @UpdateDateColumn({name: "update_at", nullable: false})
    updateAt!: Date;
};
