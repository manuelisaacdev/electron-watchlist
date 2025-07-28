import { Check, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Person from "./Person.js";

@Entity({name: 'tasks'})
@Check(`"progress" BETWEEN 1 AND 100`)
export default class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "text"})
    description!: string;

    @Column({nullable: false, default: true})
    animes!: boolean;
    
    @Column({nullable: false, default: true})
    movies!: boolean;
    
    @Column({nullable: false, default: true})
    series!: boolean;
    
    @Column({nullable: false, default: true})
    doramas!: boolean;

    @Column({nullable: false, default: 0})
    progress!: number;
    
    @Column({nullable: false, default: false})
    completed!: boolean;
    
    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @UpdateDateColumn({name: "update_at", nullable: false})
    updateAt!: Date;
    
    @ManyToOne(() => Person)
    @JoinColumn({name: "person_id"})
    person!: Person;
};
