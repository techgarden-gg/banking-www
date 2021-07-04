import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavModule { }
