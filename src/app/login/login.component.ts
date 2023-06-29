import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { StoreService } from '../service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  formData!: any;
  formService!: any;

  constructor(
    private formb: FormBuilder,
    private ser: DataService,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formb.group({
      email: [''],
      password: [''],
    });
  }

  formSubmit() {
    console.log(this.loginForm.value);

    const formData: FormData = new FormData();

    formData.append('email', this.loginForm.value.email);
    formData.append('password', this.loginForm.value.password);

    this.ser.logindata(formData).subscribe((res: any) => {
      console.log('Response of sign in', res);
      let loginRes=res.data;
      if (res.status == 200) {
        alert('Login Done!');
         this.store.setData(loginRes.first_name,loginRes.last_name,loginRes.email,res.token);
      } else {
        alert('Login Error');
      }
    });

   
   
  }
}
