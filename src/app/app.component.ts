// import { SelectAutocompleteComponent } from "./select-autocomplete/select-autocomplete.component";
import { Component, ViewChild, OnInit } from '@angular/core';
import { MaskPipe } from "ngx-mask";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { createCounterRangeValidator } from './atomic-design/atoms-form-field/form-field-input/form-field-input.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  icon = 'visibility';
  type = 'password';
  hidePassword = false;

  instruments = [ { instrumentId: 1 , name: 'prueba', description: ''}, { instrumentId: 2 , name: 'prueba 2', description: ''} ];
  errorMessage = 'nose q poner';
  showError = true;
  selectedOptions = [1];
  instrumentsSelected = this.selectedOptions;
  getSelectedOptions(selected) {
    this.instrumentsSelected = selected;
    this.form.controls.multichecbox.setValue(selected);
  }


  form: FormGroup;

  list = [ { id: 1 , label: 'asgfs' }, { id: 2 , label: 'sdga' } ];
  constructor(
    private maskPipe: MaskPipe,
    private _formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      password: [5, Validators.required],
      opciones: [2, Validators.required],
      checbox: [ true , Validators.required],
      multichecbox: [ this.instrumentsSelected , Validators.required],
    });
  }

  print() {
    console.log('llego el click');
  }

  clickIcon() {
    this.hidePassword = !this.hidePassword;
    this.icon = this.hidePassword ? 'visibility_off' : 'visibility';
    this.type = this.hidePassword ? 'text' : 'password';
  }
}

