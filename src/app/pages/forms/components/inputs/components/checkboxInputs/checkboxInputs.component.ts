import {Component} from '@angular/core';

@Component({
  selector: 'checkbox-inputs',
  templateUrl: './checkboxInputs.html',
})
export class CheckboxInputs {
  public checkboxModel = [{
    name: 'چک‌باکس ۱',
    checked: false,
    class: 'col-md-4'
  }, {
   name: 'چک‌باکس ۲',
    checked: true,
    class: 'col-md-4'
  }, {
  name: 'چک‌باکس ۳',
    checked: false,
    class: 'col-md-4'
  }];

  isDisabled: boolean = false;

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor() {
  }

}
