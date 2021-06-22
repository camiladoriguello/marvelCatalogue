import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventssComponent } from './eventss/eventss.component';
import { SeriesComponent } from './series/series.component';
import { StoriessComponent } from './storiess/storiess.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'eventss', component: EventssComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'storiess', component: StoriessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
