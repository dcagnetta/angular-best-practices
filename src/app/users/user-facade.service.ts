import { Inject, Injectable } from '@angular/core';
import { UserDataService, UsersState } from './user.state';
import { Observable } from 'rxjs';
import { USER_DATA_SERVICE, Users } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  state: UsersState = new UsersState({ allUsers: [] }, this._data);
  allUsers$: Observable<Users>;

  constructor(
    @Inject(USER_DATA_SERVICE) private _data: UserDataService
  ) {
    this.state.loadAllUsers();
    this.allUsers$ = this.state.allUsers$;
  }
}
