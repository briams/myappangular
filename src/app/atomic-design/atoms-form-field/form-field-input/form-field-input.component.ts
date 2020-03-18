import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { AlingIcon } from '../theme.enum';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldInputComponent implements ControlValueAccessor, OnInit {

  @Input() appearance: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() alignIcon: string;
  //type input
  @Input() type: string;
  //mask input
  @Input() mask: string;
  @Input() showMaskTyped: string;
  @Input() suffix: string;
  @Input() prefix: string;

  @Output() clickIcon = new EventEmitter();

  value: string;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  constructor() { }

  ngOnInit(): void {
    this.alignIcon = this.alignIcon ? AlingIcon[this.alignIcon] : AlingIcon.default;
  }

  writeValue(value: any): void {
    this.value = value || '';
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

  setOnClick() {
    this.clickIcon.emit();
  }

}
