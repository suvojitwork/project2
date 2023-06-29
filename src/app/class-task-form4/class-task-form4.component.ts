import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-task-form4',
  templateUrl: './class-task-form4.component.html',
  styleUrls: ['./class-task-form4.component.css']
})
export class ClassTaskForm4Component implements OnInit {

  // @Output() details = new EventEmitter();
  // qualification: string[] = ["Bachelor's Degree", "Master's Degree"]
  // sq:string[]=[];

  addForm!: FormGroup;
  showFormData: boolean = false;
  formData!: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*$/), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      qualifications: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#*&])[A-Za-z\d@#*&]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^9\d{9}$/)]],
      city: ['', Validators.required],
      pin: ['', [Validators.maxLength(6), Validators.pattern(/^\d+$/)]]
    });
  }

  // check(event:any){
  //   if(this.sq.length > 0){
  //     let sqindex = this.sq.findIndex((x) => event.target.value);
  //     if(sqindex!=-1) this.sq.splice(sqindex,1);
  //   }
  //   else this.sq.push(event.target.value);
  //   console.log(this.sq);
    
  // }

  dataSubmit() {
    if (this.addForm.valid) {
      this.formData = this.addForm.value;
      this.showFormData = true;
      console.log(this.formData);
      alert('Data Added');
    } else {
      alert('Please fill all the required fields correctly.');
    }
  }
  
  resetForm() {
    this.addForm.reset();
  }
}
