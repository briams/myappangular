import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SelectAutocompleteModule } from './select-autocomplete/select-autocomplete.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ButtonModule } from './atomic-design/atoms/button/button.module';
import { IconModule } from './atomic-design/atoms/icon/icon.module';
import { LinkModule } from './atomic-design/atoms/link/link.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    LinkModule,
    IconModule,

    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SelectAutocompleteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
