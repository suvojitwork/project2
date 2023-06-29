import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-class-task-form',
  templateUrl: './class-task-form.component.html',
  styleUrls: ['./class-task-form.component.css']
})
export class ClassTaskFormComponent implements OnInit {
  addForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      gender: new FormControl('', [Validators.required]),
      qualification1: new FormControl(false),
      qualification2: new FormControl(false),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#*]).{8,}$'
        ),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^9[0-9]{9}$'),
      ]),
      city: new FormControl('', [Validators.required]),
      pin: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$'),
        Validators.maxLength(6),
      ]),
    });
  }

  submitData() {
    console.log('Submitted value: ', this.addForm.value);
    alert('Form is Submitted');
  }
}

