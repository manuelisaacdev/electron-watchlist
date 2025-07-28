import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Person from "./Person.js";

export default abstract class Share {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    
    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @ManyToOne(() => Person)
    @JoinColumn({name: "person_id"})
    person!: Person;
};
