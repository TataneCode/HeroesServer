import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    alias: string;

    @Column()
    strength: number;

    @Column('date')
    createdOn: Date;

}
