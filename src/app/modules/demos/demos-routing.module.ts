import { DemoListComponent } from './demo-list/demo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: 'list',
        component: DemoListComponent,
      },
      {
        path: 'customers',
        component: CustomerListComponent,
      },
      { path: '', redirectTo: 'demos', pathMatch: 'full' },
      { path: '**', redirectTo: 'demos', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
