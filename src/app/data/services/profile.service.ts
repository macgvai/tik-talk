import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileInterface} from '../interfaces/profile.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course'
  constructor() { }

  getTestAccount(): Observable<ProfileInterface[]> {
    return this.http.get<ProfileInterface[]>(`${this.baseApiUrl}/account/test_accounts`)
  }

}
