import { Component, OnInit } from '@angular/core';
import { EventssApiService } from './shared/eventss-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventss',
  templateUrl: './eventss.component.html',
  styleUrls: ['./eventss.component.css']
})
export class EventssComponent implements OnInit {

  constructor(private eventssService: EventssApiService) { }

  allEventss: Observable<any>

  ngOnInit(): void {
    this.getEventss()
  }

  getEventss() {
    this.allEventss = this.eventssService.getAllEventss()
  }

}
