import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public initial_value = [1,2,3]

  constructor() { }

  resetAll(){
    this.initial_value=[0,0,0]
  }

  increment(position: number): number{
    this.initial_value[position]++
    return this.initial_value[position]
  }
}
