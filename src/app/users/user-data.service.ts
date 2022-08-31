import { Observable } from 'rxjs';
import { IGetUserData, Users } from './user.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserDataService implements IGetUserData {

  constructor(private _http: HttpClient) { }

  getAll$(): Observable<Users> {
    return this._http.get<Users>('https://jsonplaceholder.typicode.com/users');
  };
}
