import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm"

import Gender from "./Gender.js";
import PreferredMedia from "./PreferredMedia.js";

@Entity({name: 'persons'})
export default class Person extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({length: 100, nullable: false})
    name!: string;
    
    @Column({length: 10, enum: Gender, nullable: false})
    gender!: Gender;

    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @UpdateDateColumn({name: "update_at", nullable: false})
    updateAt!: Date;

    @OneToOne((type) => PreferredMedia)
    @JoinColumn({name: "preferred_media_id", referencedColumnName: "id", foreignKeyConstraintName: "fk_persons_preferred_media"})
    preferredMedia!: PreferredMedia;
}