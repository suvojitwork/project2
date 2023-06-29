import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  addForm!: FormGroup;
  formValues!: any;
  imgData!: any;
  constructor(
    private formBuilder: FormBuilder,
    private regService: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      first_name: ['', [Validators.minLength(3), Validators.required]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
          Validators.required,
        ],
      ],
      password: ['', Validators.required],
      img: ['', Validators.required],
    });
  }

  //image storage
  fileSelect(ev: any) {
    console.log(ev.target.files[0]);
    this.imgData = ev.target.files[0];
  }

  //form process
  formsubmit() {
    console.log(this.addForm.value);
    this.formValues = this.addForm.value;

    const formData: FormData = new FormData();

    formData.append('first_name', this.formValues.first_name);
    formData.append('last_name', this.formValues.last_name);
    formData.append('email', this.formValues.email);
    formData.append('password', this.formValues.password);
    formData.append('profile_pic', this.imgData, this.imgData.name);

    this.regService.rgdata(formData).subscribe((res: any) => {
      console.log('response after posting', res);

      if (res.status == 200) {
        alert('registration done');
      } else {
        alert('Registration failed');
      }
    });
  }
}
