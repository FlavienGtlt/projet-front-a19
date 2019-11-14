import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  //public initial_value = [0,0,0]

  private counterUrl = 'https://lp4asgadot.herokuapp.com/counters/';
  private countersUrl = 'https://lp4asgadot.herokuapp.com/counters.json';
  
  constructor(private httpclient: HttpClient) { }

  resetAll(){
    //this.initial_value=[0,0,0]
  }
  
  increment(id: number): Observable<Counter>{
    return this.httpclient.patch<Counter>(this.counterUrl + id + '.json', {});
  }
  
  /*decrement(position: number): number{
    this.initial_value[position]--
    return this.initial_value[position]
  }*/
  
  reset(position: number){
    /*this.initial_value[position]=0
    return this.initial_value[position]*/
  }
  getCounter(id: number) : Observable<Counter> {
    return this.httpclient.get<Counter>(this.counterUrl+id+".json");
  }
  
  getCounters(): Observable<Counter[]> {
    return this.httpclient.get<Counter[]>(this.countersUrl);
  }
}
