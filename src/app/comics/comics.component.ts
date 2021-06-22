import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './shared/comics-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsService: ComicsApiService) { }

  allComics: Observable<any>

  ngOnInit(): void {
    this.getComics()
  }

  getComics() {
    this.allComics = this.comicsService.getAllComics()
  }

}
