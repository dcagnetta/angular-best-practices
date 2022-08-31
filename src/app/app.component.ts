import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacadeService } from './users/user-facade.service';
import { Users } from './users/user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allUsers$: Observable<Users> = this.facade.allUsers$

  constructor(public facade: UserFacadeService) {  }
}
