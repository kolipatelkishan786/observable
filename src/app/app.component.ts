import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UserService){}

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1){
          this.user1Activated = true;
        } else if (id === 2){
          this.user2Activated = true;
        }
      }
    );
  }
}
