import { UserDataService, Users, UsersState, UserStateModel } from './user.state';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { EMPTY, empty, of } from 'rxjs';


describe("UsersState", function(){

  let state: UsersState;
  let data: UserDataService;

  const initialState: UserStateModel = {
    allUsers: []
  };

  const makeUsersStub = (count: number): Users =>
    Array(count)
      .map((current: number) => ({
        username: `user${current}`
      }));


  beforeEach(waitForAsync( () => {
        TestBed.configureTestingModule({
          providers: [
            {
              provide: 'UserDataService', useValue: { getAll$: () => EMPTY }
            }
          ]
        }).compileComponents();
    })
  );

  beforeEach(() => {

  });

  it("should run tests", function(){
    expect(true).toEqual(true);
  });
});
