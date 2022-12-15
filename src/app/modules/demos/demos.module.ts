import { DemoListComponent } from './demo-list/demo-list.component';
import { CreateTestModalComponent } from './create-test-modal/create-test-modal.component';
import { ViewTestModalComponent } from './view-test-modal/view-test-modal.component';
import { DeleteTestModalComponent } from './delete-test-modal/delete-test-modal.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateUpdateCustomerModalComponent } from './create-update-customer-modal/create-update-customer-modal.component';

@NgModule({
  declarations: [
    DemosComponent,
    CreateTestModalComponent,
    DeleteTestModalComponent,
    ViewTestModalComponent,
    DemoListComponent,
    CustomerListComponent,
    CreateUpdateCustomerModalComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    DemosRoutingModule,
  ],
})
export class DemosModule { }
