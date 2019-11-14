import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-info',
  templateUrl: './counter-info.component.html',
  styleUrls: ['./counter-info.component.css']
})
export class CounterInfoComponent implements OnInit {

  @Input() position: number;
  counter: Counter = new Counter();

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.getCounter();
  }

  getCounter() {
    this.counterService.getCounter(this.position)
      .subscribe(counter => {
        this.counter = counter;
      });
  }


  increment() {
    this.counterService.increment(this.counter.id)
      .subscribe(counter => {
        this.counter.value = counter.value;
      });
  }

}