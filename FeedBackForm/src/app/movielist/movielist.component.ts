import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  poster: string;
  genre: string;
  rating: number;
  description: string;
}

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatIconModule, FormsModule],
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [
    {
      title: 'Coolie',
      poster: 'https://www.wallsnapy.com/img_gallery/coolie-movie-rajini--poster-4k-download-9445507.jpg',
      genre: 'Sci-Fi',
      rating: 5,
      description: 'A thief who steals corporate secrets through dream-sharing technology.'
    },
    {
      title: 'AMARAN',
      poster: 'https://www.wallsnapy.com/img_gallery/amaran-second-look-poster-hd-download-4k-4593698.jpg',
      genre: 'Thriller',
      rating: 4,
      description: 'A love story that blossoms on the ill-fated Titanic voyage.'
    },
    {
      title: 'Aakasam nee haddhu ra',
      poster: 'https://www.wallsnapy.com/img_gallery/surari-potru-hd-wallpapers-download-5905035.jpg',
      genre: 'Action',
      rating: 5,
      description: 'Batman faces his greatest psychological and physical tests against the Joker.'
    },
    {
      title: 'Vistle',
      poster: 'https://www.wallsnapy.com/img_gallery/bigil-hd-photos-download-4140305.jpg',
      genre: 'Sci-Fi',
      rating: 4,
      description: 'Explorers travel through a wormhole in space to ensure humanitys survival.'
    }
  ];

  selectedGenre: string = 'All';

  get genres(): string[] {
    return ['All', ...new Set(this.movies.map(m => m.genre))];
  }

  get filteredMovies(): Movie[] {
    if (this.selectedGenre === 'All') return this.movies;
    return this.movies.filter(m => m.genre === this.selectedGenre);
  }

  get averageRating(): number {
    if (this.movies.length === 0) return 0;
    return (
      this.movies.reduce((sum, movie) => sum + movie.rating, 0) /
      this.movies.length
    );
  }

  isTopRated(movie: Movie): boolean {
    return movie.rating === 5;
  }
}
