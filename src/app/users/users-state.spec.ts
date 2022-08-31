import { IGetUserData, UserDataService, UsersState } from './user.state';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';
import { USER_DATA_SERVICE, Users } from './user.models';


describe(`${UsersState.name} Tests`, function(){

  let getAllUsers: IGetUserData;

  const makeUsersStub = (count: number): Users =>
    Array(count)
      .map((current: number) => ({
        name: `name_${current}`,
        username: `user${current}`
      }));

  const makeUserState = (usersStub: Users, getAllUsers: IGetUserData): UsersState =>
    new UsersState({allUsers: usersStub}, getAllUsers);

  beforeEach(waitForAsync( () => {
        // Setup testing module
        TestBed.configureTestingModule({
          providers: [
            {
              provide: USER_DATA_SERVICE, useValue: { getAll$: () => EMPTY }
            }
          ]
        }).compileComponents();

        // Retrieve provided service
        getAllUsers = TestBed.inject<UserDataService>(USER_DATA_SERVICE);
    })
  );

  it('should resolve data service', () => {
    expect(getAllUsers).toBeTruthy();
  });


  it("should init state", done => {
    const state = makeUserState([], getAllUsers);

    state.allUsers$
      .subscribe(
        users => {
          expect(users.length).toEqual(0);
          done();
        }
      );
  });

  it("should get all users", done => {
    const userStub = makeUsersStub(3);
    const state = makeUserState(userStub, getAllUsers);

    // Setup mock call
    spyOn(getAllUsers, 'getAll$')
      .and.returnValue(of(userStub));

    state.loadAllUsers();

    state.allUsers$
      .subscribe(
        users => {
          expect(users.length).toEqual(userStub.length);
          done();
        }
      );

  });


});
