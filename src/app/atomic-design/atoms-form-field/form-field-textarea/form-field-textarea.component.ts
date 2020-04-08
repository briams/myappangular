import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-textarea',
  templateUrl: './form-field-textarea.component.html',
  styleUrls: ['./form-field-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldTextareaComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldTextareaComponent implements OnInit {

  @Input() appearance: string;
  @Input() label: string;
  @Input() placeholder: string;

  @Input() error: any;
  value = new FormControl();
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: string) {
    // this.value = value;
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
