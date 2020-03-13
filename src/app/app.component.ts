// import { SelectAutocompleteComponent } from "./select-autocomplete/select-autocomplete.component";
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  print() {
    console.log('llego el click');
  }
}

