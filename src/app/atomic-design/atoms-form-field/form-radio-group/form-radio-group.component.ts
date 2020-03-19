import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-radio-group',
  templateUrl: './form-radio-group.component.html',
  styleUrls: ['./form-radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormRadioGroupComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRadioGroupComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  @Input() options;
  @Input() display = "display";
  @Input() key = "key";

  // value: string;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  value = new FormControl();

  onChecked(value: string) {
    // this.value.setValue(value);
    this.onTouch();
    this.onChange(this.value.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value.setValue(value || '');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
