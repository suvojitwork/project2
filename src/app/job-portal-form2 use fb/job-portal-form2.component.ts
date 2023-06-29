import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-portal-form2',
  templateUrl: './job-portal-form2.component.html',
  styleUrls: ['./job-portal-form2.component.css']
})
export class JobPortalForm2Component implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required],
      mail: ['', Validators.required],
      pwd: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{4,12}$'
          )
        ]
      ]
    });
  }

  dataSubmit() {
    console.log(this.addForm.value);
    alert('Data Added');
  }
}
