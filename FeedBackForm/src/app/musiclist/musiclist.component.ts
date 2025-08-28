import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Music {
  title: string;
  artist: string;
  album: string;
  duration: string;
  rating: number; // 1-5
  poster: string; // path to poster image
}

@Component({
  selector: 'app-musiclist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  musicList: Music[] = [];
  filteredList: Music[] = [];
  artistFilter: string = '';
  albumFilter: string = '';

  ngOnInit(): void {
    this.musicList = [
      { title: 'Song 1', artist: 'NTR', album: 'Aravinda sameetha', duration: '3:45', rating: 5, poster: 'https://m.media-amazon.com/images/M/MV5BOTY3YTNmMjEtZTBhZS00NzllLWExZjctOWFmZmZjNzgyNWJhXkEyXkFqcGc@._V1_.jpg' },
      { title: 'Song 2', artist: 'Allu Arjun', album: 'Ala vaikuntapuram lo', duration: '4:10', rating: 4, poster: 'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg' },
      { title: 'Song 3', artist: 'Mahesh Babu', album: 'Guntur Kaaram', duration: '2:50', rating: 3, poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT34ySWDbeAUfc4Zqt2JjYS1u8-1TEhj2dZrplO76XTReBDRGIt' },
      { title: 'Song 4', artist: 'Pawan kalyan', album: 'OG', duration: '5:00', rating: 5, poster: 'https://wallpapercave.com/wp/wp13058454.jpg' },
      { title: 'Song 5', artist: 'Ram Charan', album: 'RRR', duration: '3:20', rating: 2, poster: 'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg' }
    ];
    this.filteredList = this.musicList;
  }

  filterSongs() {
    this.filteredList = this.musicList.filter(song =>
      (!this.artistFilter || song.artist.toLowerCase().includes(this.artistFilter.toLowerCase())) &&
      (!this.albumFilter || song.album.toLowerCase().includes(this.albumFilter.toLowerCase()))
    );
  }
}
