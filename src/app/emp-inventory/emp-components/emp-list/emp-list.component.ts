import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp-services/emp.service';

//fontawesome icons
import {
  faAngleRight,
  faLaptop,
  faMouse,
  faTrash,
  faUsers,
  faPowerOff,
  faUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {

  employees: any[] = [];
  filtered:any;
  filteredEmployees: any[] = [];
  searchInput: string = '';
  pendingRequests=3;
  employee: any;
  employeesToDisplay: any;
  faAngleRight = faAngleRight;
  faLapy = faLaptop;
  faMouse = faMouse;
  faUsers = faUsers;
  faUser = faUser;
  faBell = faBell;
  faPowerOff = faPowerOff;
  faTrash = faTrash;
  lapyAssigned = true;
  mouseAssigned = true;
  

  colors = [
    '#FF9A9E',
    '#2F5CFF',
    '#00B4DB',
    '#4B6CB7',
    '#ACB6E5',
    '#5236FF',
    '#06BEB6',
    '#9796F0',
  ];

  constructor(private empService: EmpService, private router: Router) {}

  ngOnInit(): void {
    this.empService.getEmployeeList().subscribe((response: any) => {
      this.employees = response;
      this.employeesToDisplay  = this.employees;
      this.employeesToDisplay = this.employeesToDisplay.users;
    });
  }

  trackByFn(index: number, employee: any): number {
    return employee.id;
  }


  searchEmployees(searchInput:any) {
    this.empService.search(this.searchInput).subscribe(response => {
      this.filtered = response;
      this.filteredEmployees = this.filtered.users      
      this.employeesToDisplay  = this.filteredEmployees;
      console.log(this.filteredEmployees);
    });
          
  }

  randomColor() {
    let index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  viewDetails(employee: any) {
    const id = employee.id  
    localStorage.setItem('em_id',id)  
    this.router.navigate(['emp-inventory/emp-details', id]);    
  }
  
}