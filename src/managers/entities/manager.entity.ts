import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;
    @Column('text')
    managerFullName: string;    
    @Column('float')
    salary: number;
    @Column('text')
    managerEmail: string;
    @Column('text')
    managerPhoneNumber: string;

}
