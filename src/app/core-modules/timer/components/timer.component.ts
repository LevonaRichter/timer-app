import { ChangeDetectionStrategy, Component,  Input, OnInit, Output } from '@angular/core';
import { interval, Observable, take, timer, map } from 'rxjs';
import { TimerProperties } from '../../models/timer-properties.model';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit  {

   @Input() interval: number = 1000;
   @Input() totalSeconds: number = 30;
   @Input() timerName: string = '';

   timerInterval$: Observable<number> = new Observable<number>();
   timer$: Observable<number> = new Observable<number>();
   times:number = this.totalSeconds;
   countDown$: Observable<number> = new Observable<number>();
   
  minutes$: Observable<string> = new Observable<string>();
  seconds$: Observable<string> = new Observable<string>();

  timerSub: any;    

   ms$: Observable<number> = new Observable<number>();

   constructor() {
  }

   ngOnInit(){
     
    this.initTimer();   
    this.startCountDown();
   }

   toMinutes(ms: number){
      return Math.floor(ms / this.interval / 60);
   }    

   toSeconds(ms: number) {
    return Math.floor(ms / this.interval) % 60;
   }

   toMs= (t: number) => t * this.interval;

   addLeadingZeros(num: number, totalLength: number): string {
    return String(num).padStart(totalLength, '0');
  }

   initTimer(){
    const storedProperties = this.getItemFromLocalStorage();
    if (storedProperties){
      if (this.timerSub){
        this.timerSub.unsubscribe();  
      }
      this.times= Math.floor(storedProperties.milliseconds / this.interval);
    }
    else {
      this.times = this.totalSeconds;   
  
    }
    this.timerInterval$ = interval(this.interval).pipe(take(this.times + 1));
    this.timer$ =timer(Math.floor((this.times + 2) * this.interval)); 
    this.countDown$ = this.timerInterval$.pipe(take(this.times + 1));
  }

   startCountDown(){

    this.ms$ = this.countDown$.pipe(map(val=>{
      let ms = Math.floor((this.times - val) * this.interval);
      this.setItemToLocalStorage(ms);
      return ms;
    }));

    this.minutes$=this.ms$.pipe(map(ms=>{
      return this.addLeadingZeros(this.toMinutes(ms), 2);
    }));

    this.seconds$=this.ms$.pipe(map(ms=>{
      return this.addLeadingZeros(this.toSeconds(ms), 2);
    }));
 
    this.timerSub = this.timer$.subscribe(val => {      
      this.unSubscribe();
      alert("You missed the last rocket to mars!")
    });

    
   }


restTimer(){
  this.unSubscribe();
  this.initTimer();
  this.startCountDown();
}

unSubscribe(){
  this.timerSub.unsubscribe();  
  localStorage.setItem(this.timerName, '');
}

setItemToLocalStorage( ms:number){
  
  const timerProperties: TimerProperties = {
    milliseconds: ms
  };
  localStorage.setItem(this.timerName, JSON.stringify(timerProperties ));

}

getItemFromLocalStorage(){
const item = localStorage.getItem(this.timerName);
return item? JSON.parse(item) : null
}
  
}
