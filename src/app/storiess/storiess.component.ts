import { Component, OnInit } from '@angular/core';
import { StoriessApiService } from './shared/storiess-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storiess',
  templateUrl: './storiess.component.html',
  styleUrls: ['./storiess.component.css']
})
export class StoriessComponent implements OnInit {

  constructor(private storiessService: StoriessApiService) { }

  allStoriess: Observable<any>

  ngOnInit(): void {
    this.getStoriess()
  }

  getStoriess() {
    this.allStoriess = this.storiessService.getAllStoriess()
  }

}
