import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: Counter = new Counter();
  
  

  constructor(public CounterService: CounterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      () => {
        this.getCounter();
      }
    )
  }

  getCounter() {
    this.counter.id = +this.route.snapshot.paramMap.get('id'); 
    this.CounterService.getCounter(this.counter.id).subscribe(counter => {this.counter = counter;});
  }
	
  increment() {
    //this.CounterService.increment(this.position)
    this.CounterService.increment(this.counter.id).subscribe(counter => this.counter.value = counter.value);
  }

  decrement() {
    //this.CounterService.decrement(this.position)
  }

  reset() {
    //this.CounterService.reset(this.position)
  }
}
