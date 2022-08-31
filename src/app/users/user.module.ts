import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_DATA_SERVICE } from './user.models';
import { UserDataService } from './user.state';
import { UserFacadeService } from './user-facade.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: USER_DATA_SERVICE, useClass: UserDataService },
    UserFacadeService
  ],
})
export class UserModule { }
