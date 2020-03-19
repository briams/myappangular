import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
// import { SelectAutocompleteModule } from './select-autocomplete/select-autocomplete.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMaskModule, MaskPipe } from 'ngx-mask';


import { ButtonModule } from './atomic-design/atoms/button/button.module';
import { IconModule } from './atomic-design/atoms/icon/icon.module';
import { LinkModule } from './atomic-design/atoms/link/link.module';
import { ImageModule } from './atomic-design/atoms/image/image.module';
import { InputModule } from './atomic-design/atoms/input/input.module';
import { InputMaskModule } from './atomic-design/atoms/input-mask/input-mask.module';
import { FormFieldModule } from './atomic-design/atoms/form-field/form-field.module';
import { FormFieldInputModule } from './atomic-design/atoms-form-field/form-field-input/form-field-input.module';
import { FormFieldSelectModule } from './atomic-design/atoms-form-field/form-field-select/form-field-select.module';
import { FormFieldCheckboxModule } from './atomic-design/atoms-form-field/form-field-checkbox/form-field-checkbox.module';
import { SelectAutocompleteModule } from './atomic-design/atoms-form-field/select-autocomplete/select-autocomplete.module';
import { FormRadioGroupModule } from './atomic-design/atoms-form-field/form-radio-group/form-radio-group.module';


import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    LinkModule,
    IconModule,
    ImageModule,
    InputModule,
    InputMaskModule,
    FormFieldModule,
    FormFieldInputModule,
    FormFieldSelectModule,
    FormFieldCheckboxModule,
    SelectAutocompleteModule,
    FormRadioGroupModule,

    NgxMaskModule.forRoot(),

    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
