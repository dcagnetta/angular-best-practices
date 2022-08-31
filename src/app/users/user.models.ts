import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  username: string;
}

export type Users = User[];

export interface UserStateModel {
  allUsers: Users;
}

export const USER_DATA_SERVICE = new InjectionToken<string>('UserDataService');

export interface IGetUserData {
  getAll$(): Observable<Users>;
}
