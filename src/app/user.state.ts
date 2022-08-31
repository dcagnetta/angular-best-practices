import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
  username: string;
}

export type Users = User[];

export interface UserStateModel {
  allUsers: Users;
}

export class UserDataService {

  constructor(private _http: HttpClient) { }

   getAll$(): Observable<Users> {
        return this._http.get<Users>('http://api.com/users');
   };
}

@Injectable({
  providedIn: 'root'
})
export class UsersState {

  private _subject: BehaviorSubject<UserStateModel> = new BehaviorSubject(null);

  get allUsers$(): Observable<Users> {
    return this._subject.asObservable()
      .pipe(map(state => state.allUsers));
  }

  constructor(
    private initialState: UserStateModel,
    @Inject ('UserDataService') private _data: UserDataService
  ) {
    this._subject.next({...initialState});
  }

  loadAllUsers(): void {
    this._data.getAll$()
      .pipe(
          tap(users => this._subject.next({allUsers:[...users]}))
        )
        .subscribe();
  }

}
