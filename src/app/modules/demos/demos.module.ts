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
import { MachineListComponent } from './Machine/machine-list/machine-list.component';
import { CreateUpdateMachineModalComponent } from './Machine/create-update-machine-modal/create-update-machine-modal.component';
import { SensorListComponent } from './Sensor/sensor-list/sensor-list.component';
import { CreateUpdateSensorModalComponent } from './Sensor/create-update-sensor-modal/create-update-sensor-modal.component';
import { ProcessListComponent } from './Process/process-list/process-list.component';
import { CreateUpdateProcessModalComponent } from './Process/create-update-process-modal/create-update-process-modal.component';

@NgModule({
  declarations: [
    DemosComponent,
    CreateTestModalComponent,
    DeleteTestModalComponent,
    ViewTestModalComponent,
    DemoListComponent,
    CustomerListComponent,
    CreateUpdateCustomerModalComponent,
    MachineListComponent,
    CreateUpdateMachineModalComponent,
    SensorListComponent,
    CreateUpdateSensorModalComponent,
    ProcessListComponent,
    CreateUpdateProcessModalComponent,
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
