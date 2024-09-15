import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuid } from 'uuid';


@Injectable()
export class EmployeesService {
  private  employees: CreateEmployeeDto[]= [
    {id: uuid() ,name: 'Jose Carlos', lastName: 'Carrera', phoneNumber: '4353243' }, 
    {id: uuid(), name: 'Juan', lastName: 'Perez', phoneNumber: '4367433243' }
  ];
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = uuid();
    this.employees.push(createEmployeeDto);
    return this.employees;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.find((employee) => employee.id === id)[0];
    if(!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate = {...employeeToUpdate, ...updateEmployeeDto}
    
    if(employeeToUpdate) throw new NotFoundException('Employee not found');
    this.employees = this.employees.map((employee)=> {
      if(employee.id === id){
        employee = employeeToUpdate
      }
      return employee
    })
    return employeeToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    return this.employees.filter((employee) => employee.id !== id);
  }
}
