import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//  Emp - inventory Module component
import { EmpInventoryComponent } from './emp-inventory.component';
import { EmpInventoryRoutingModule } from './emp-inventory-routing.module';

// Emp - inventory Components
import { EmpListComponent } from './emp-components/emp-list/emp-list.component';
import { HrDetailsComponent } from './emp-components/hr-details/hr-details.component';
import { EmpViewComponent } from './emp-components/emp-view/emp-view.component';

// forms module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PendingRequestsComponent } from './emp-components/pending-requests/pending-requests.component';
import { AddEmployeeComponent } from './emp-components/add-employee/add-employee.component';
@NgModule({
  declarations: [
    EmpInventoryComponent,
    EmpListComponent,
    HrDetailsComponent,
    EmpViewComponent,
    PendingRequestsComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    EmpInventoryRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class EmpInventoryModule {}
