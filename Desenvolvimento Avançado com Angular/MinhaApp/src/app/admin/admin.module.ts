import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin.routes';

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: []
})
export class AdminModule { }
