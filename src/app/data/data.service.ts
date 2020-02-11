import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingForm(userSetting: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/hng6GFxuQyqNUgUBokV5', userSetting);
  }

}
