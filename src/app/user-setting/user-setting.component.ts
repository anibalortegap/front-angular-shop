import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'app/data/user-setting';
import { DataService } from 'app/data/data.service';
import { NgModel, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null ,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
    password: null,
    date: null,
    color: null

  }

  userSetting: UserSettings = {...this.originalUserSettings}
  postError = false;
  postErrorMessage = ''; 
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field : NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if(form.valid){
      this.dataService.postUserSettingForm(this.userSetting).subscribe(
        result => console.log('Success: ', result),
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError=true
      this.postErrorMessage = 'Please fix the above errors'
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
