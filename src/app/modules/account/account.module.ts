import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AccountComponent, DashboardComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class AccountModule {}
