import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'genres'})
export default class Genre extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({length: 100, nullable: false})
    name!: string;

    @Column({type: "text", nullable: false})
    description?: string;

    @CreateDateColumn({name: "created_at", nullable: false, update: false})
    createdAt!: Date;
    
    @UpdateDateColumn({name: "update_at", nullable: false})
    updateAt!: Date;
};
