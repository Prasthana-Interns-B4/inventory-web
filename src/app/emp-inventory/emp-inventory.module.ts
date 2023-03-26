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
import { FormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [EmpListComponent, HrDetailsComponent, EmpInventoryComponent, EmpViewComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,    
    EmpInventoryRoutingModule,
    FormsModule,
    RouterModule,
  ],
})
export class EmpInventoryModule {}
