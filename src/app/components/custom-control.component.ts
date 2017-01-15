import {Component, forwardRef, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

// create a provider for the component
const NUMBER_VALUE_ACCESSOR = {
  provide    : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomControlComponent),
  multi      : true
};

@Component({
  selector : 'swat-custom-control',
  providers: [NUMBER_VALUE_ACCESSOR],
  template : `
      <button (click)="increment($event)">+</button>
      {{counterValue}}
      <button (click)="decrement($event)">-</button>
     `
})

// you must implement the ControlValueAccessor
export class CustomControlComponent implements ControlValueAccessor {

  @Input() private _counterValue = 0;

  // placeholder method
  public propagateChange = (_: any) => {
  };

  get counterValue(): number {
    return this._counterValue;
  }

  // invoke propagateChange on value change
  set counterValue(value: number) {
    this._counterValue = value;
    this.propagateChange(this.counterValue);
  }

  private increment(event) {
    event.preventDefault();
    this.counterValue++;

  }

  private decrement(event) {
    event.preventDefault();
    this.counterValue--;
  }

  /**
   * writes a new value from the form model into the
   * view or (if needed) DOM property.
   *
   * @param obj
   */
  public writeValue(obj: any): void {
    this.counterValue = obj;
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }
}
