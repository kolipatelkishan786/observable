import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumber = Observable.interval(1000);
    // myNumber.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first Package');
      }, 2000);
      setTimeout(() => {
        observer.next(' second Package');
      }, 4000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 5000);
    });
    myObservable.subscribe(
      (data: string) => { console.log(data);},
      () => { console.log('completed');}
    );
  }

}
