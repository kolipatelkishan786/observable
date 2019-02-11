import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

}
