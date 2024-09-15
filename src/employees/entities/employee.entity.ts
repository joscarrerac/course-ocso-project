import e from "express";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  employeeId: string;

  @Column("text")
  name: string;

  @Column("text")
  lastName: string;

  @Column("text")
  phoneNumber: string;

  @Column("text")
  email: string;

}
