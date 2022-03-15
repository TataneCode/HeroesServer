import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { League } from "./league";
import { Power } from "./power";

@Entity()
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @Column({ length: 255 })
    alias: string;

    @OneToOne(() => Power)
    @JoinColumn()
    power?: Power;

    @ManyToOne(() => League, league => league.heroes)
    @JoinColumn()
    league: League;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdOn: Date;

}
