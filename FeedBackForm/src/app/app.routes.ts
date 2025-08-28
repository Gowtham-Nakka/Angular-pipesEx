import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { MovieListComponent } from './movielist/movielist.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { SongsplaylistComponent } from './songsplaylist/songsplaylist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'music', component: MusiclistComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'songs', component: SongsplaylistComponent },
  { path: '**', redirectTo: 'movies' }
];
