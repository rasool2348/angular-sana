import {Component} from '@angular/core';

@Component({
  selector: 'validation-inputs',
  templateUrl: './validationInputs.html',
})
export class ValidationInputs {
  public checkboxModel = [{
    name: 'چک‌باکس با وضعیت معتبر',
    state: false,
    class: 'has-success checkbox'
  }, {
    name: 'چک‌باکس با وضعیت اخطار',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'چک‌باکس با وضعیت نامعتبر',
    state: false,
    class: 'has-error checkbox'
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor() {
  }
}
