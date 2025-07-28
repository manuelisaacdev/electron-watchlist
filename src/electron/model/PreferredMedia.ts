import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'preferred_media'})
export default class PreferredMedia extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({nullable: false, default: true})
    animes!: boolean;
    
    @Column({nullable: false, default: true})
    movies!: boolean;
    
    @Column({nullable: false, default: true})
    series!: boolean;
    
    @Column({nullable: false, default: true})
    doramas!: boolean;
};
