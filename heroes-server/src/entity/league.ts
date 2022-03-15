import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hero } from "./hero";

@Entity()
export class League {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @OneToMany(() => Hero, hero => hero.league)
    heroes: Hero[]
}