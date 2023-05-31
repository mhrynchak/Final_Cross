import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactformPageRoutingModule } from './reactform-routing.module';

import { ReactformPage } from './reactform.page';
import { MyformComponent } from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactformPageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [ReactformPage,MyformComponent, ViewformComponent, UpdateformComponent]
})
export class ReactformPageModule {}
