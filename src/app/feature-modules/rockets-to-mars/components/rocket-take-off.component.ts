import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable, switchMap, take } from 'rxjs';
import { KeyValue } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rocket-take-off',
  templateUrl: './rocket-take-off.component.html',
  styleUrls: ['./rocket-take-off.component.scss']
})
export class RocketTakeOffComponent implements OnInit{

  
  constructor(){

  }

  ngOnInit(){
   

  }
 
  
  
}
