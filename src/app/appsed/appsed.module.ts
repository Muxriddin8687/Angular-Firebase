import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KassaComponent } from '../home/tabs/kassa/kassa.component';
import { RegistrationComponent } from '../home/tabs/registration/registration.component';
import { ServiseComponent } from '../home/tabs/servise/servise.component';

@NgModule({
  declarations: [
    KassaComponent,
    RegistrationComponent,
    ServiseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KassaComponent,
    RegistrationComponent,
    ServiseComponent
  ],
})


export class AppsedModule { }
