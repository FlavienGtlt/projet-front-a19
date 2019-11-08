import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private counterService: CounterService, private auth: AuthService) {}

  resetAll() {
    this.counterService.resetAll()
  }
  
  ngOnInit(){
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
  
}
