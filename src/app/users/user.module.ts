import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_DATA_SERVICE } from './user.models';
import { UserFacadeService } from './user-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDataService } from './user-data.service';


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
