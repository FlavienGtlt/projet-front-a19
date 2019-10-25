import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public initial_value = [0,0,0]

  constructor(private httpclient: HttpClient) { }

  resetAll(){
    this.initial_value=[0,0,0]
  }

  increment(position: number): number{
    this.initial_value[position]++
    return this.initial_value[position]
  }
  decrement(position: number): number{
    this.initial_value[position]--
    return this.initial_value[position]
  }
  reset(position: number): number{
    this.initial_value[position]=0
    return this.initial_value[position]
  }
  getCounterValue(id: number) : Observable<Counter> {
    return this.httpclient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json");
  }
}
