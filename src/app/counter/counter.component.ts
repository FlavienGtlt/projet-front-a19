import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() position = 0

  value: Counter;

  constructor(public CounterService: CounterService) { }

  ngOnInit() {
    this.CounterService.getCounterValue(this.position)
          .subscribe(counter => this.value =  counter)
  }

  increment() {
    //this.CounterService.increment(this.position)
    this.counterService.increment().subscribe(counter => this.value = counter);
  }

  decrement() {
    this.CounterService.decrement(this.position)
  }

  reset() {
    this.CounterService.reset(this.position)
  }
}
