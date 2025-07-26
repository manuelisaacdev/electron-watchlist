import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'persons'})
export default class Person {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({
        length: 100,
        nullable: false,
    })
    name!: string

    @Column({length: 20})
    phone!: string

    @CreateDateColumn({nullable: false, update: false})
    createdAt!: Date;

    @UpdateDateColumn({nullable: false})
    updateAt!: Date;

}