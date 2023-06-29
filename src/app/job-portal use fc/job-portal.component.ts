import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-portal',
  templateUrl: './job-portal.component.html',
  styleUrls: ['./job-portal.component.css'],
})
export class JobPortalComponent implements OnInit {
  // myNewForm!:any

  addForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*[0-9]).{4,10}$'),
      ]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10})$'),
      ]),
    });
  }

  submitData() {
    console.log('Submitted value: ', this.addForm.value);
    alert('Form is Submited')
  }
}
