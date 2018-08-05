import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { CreateService } from '../../services/create.service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(fb:FormBuilder,private createService:CreateService,private router:Router,private route:ActivatedRoute) {

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')}),
    });

    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];

  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    var userInfo;
    if (this.form.valid) {
      if(this.form.get('email').value.indexOf('@') != -1){
        userInfo = {
          email:this.form.get('email').value,password:this.form.controls.passwords.get('password').value
          }
      }else{
        userInfo = {
          phone:this.form.get('email').value,password:this.form.controls.passwords.get('password').value,
          }
      }
      this.createService.signUp(userInfo).subscribe(
        (response:Response)=>{
          const data = response.json();
          if(data.success){
            this.router.navigate([''],{relativeTo:this.route});
          }
        },
        (error)=>{
          console.log(error);
          console.log(userInfo);
        }
      );
    }
  }
}
