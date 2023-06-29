import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { StoreService } from '../service/store.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userDetails!: any;
  img_path: any = '';
  thumbnail: any = '';
  baseURL: string =
    'https://wtsacademy.dedicateddevelopers.us/';
  folderPath: string = 'uploads/user/profile_pic/';

  constructor(
    private regService: DataService,
    private storeSer: StoreService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.regService.user_profile().subscribe((res: any) => {
      this.userDetails = res.data;
      console.log('User Details: ', this.userDetails);

      this.img_path = this.baseURL + this.folderPath + this.userDetails.profile_pic;
      console.log(this.img_path);
    });
  }

  loggingOut(){
    this.storeSer.getDestroy();
    alert("Logged Out");
    this.route.navigate(['/login']);
    
  }
}
