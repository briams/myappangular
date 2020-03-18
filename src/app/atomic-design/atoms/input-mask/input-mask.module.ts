import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskComponent } from './input-mask.component';

import {MatInputModule} from '@angular/material/input';

import { NgxMaskModule, MaskPipe } from 'ngx-mask';



@NgModule({
  declarations: [InputMaskComponent],
  imports: [
    CommonModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    MaskPipe
  ],
  exports: [
    InputMaskComponent
  ],
})
export class InputMaskModule { }
