import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  tododetails = 
  [
    {"FirstName":"Cherry","LastName":"Bailey","Gender":"Female","Age":"25"},
    {"FirstName":"Lyndon","LastName":"Cameron","Gender":"Male","Age":"29"},
    {"FirstName":"Vincent","LastName":"Richardson","Gender":"Male","Age":"22"},
    {"FirstName":"Harold","LastName":"Sullivan","Gender":"Male","Age":"23"},
    {"FirstName":"April","LastName":"Anderson","Gender":"Female","Age":"26"},
    {"FirstName":"Jessica","LastName":"Perry","Gender":"Female","Age":"26"},
    {"FirstName":"Rosie","LastName":"Andrews","Gender":"Female","Age":"20"},
    {"FirstName":"Andrew","LastName":"Stevens","Gender":"Male","Age":"26"},
    {"FirstName":"Stuart","LastName":"Barnes","Gender":"Male","Age":"20"},
    {"FirstName":"Tony","LastName":"Kelly","Gender":"Male","Age":"24"}
  ]

  getTodo(){
    return this.tododetails   
  }

  constructor() { }
}
