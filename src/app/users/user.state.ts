import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IGetUserData, Users, UserStateModel } from './user.models';


export class UsersState {

  private _subject = new BehaviorSubject<UserStateModel>( { allUsers: [] });

  get allUsers$(): Observable<Users> {
    return this._subject.asObservable()
      .pipe(map(state => state.allUsers));
  }

  constructor(
    private _initialState: UserStateModel,
    private _data: IGetUserData
  ) {
    this._subject.next({..._initialState});
  }

  loadAllUsers(): void {
    this._data.getAll$()
      .pipe(
          tap(users => this._subject.next({allUsers:[...users]}))
        )
        .subscribe();
  }

}
