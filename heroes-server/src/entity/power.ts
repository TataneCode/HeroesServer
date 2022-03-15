import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Power {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    strength: number;
}