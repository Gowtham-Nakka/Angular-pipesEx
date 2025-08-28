import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-songsplaylist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './songsplaylist.component.html',
  styleUrls: ['./songsplaylist.component.css']
})
export class SongsplaylistComponent {
  songs = [
    { name: 'Naatu Naatu', artist: 'Rahul Sipligunj', album: 'RRR', duration: '3:35', rating: 5, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6OoYf-uS2iUlX2FQTGTGO6jFZsVkm_xb5lVYBfKmVGXBTYJ0NgwijoNxXfjcGaIxWkM&usqp=CAU' },
    { name: 'Samajavaragamana', artist: 'Sid Sriram', album: 'Ala Vaikunthapurramuloo', duration: '4:05', rating: 4, poster: 'https://w0.peakpx.com/wallpaper/1004/807/HD-wallpaper-ala-vaikunthapurramu-allu-arjun-pooja-hegde-samajavaragamana-thumbnail.jpg' },
    { name: 'Butta Bomma', artist: 'Armaan Malik', album: 'Ala Vaikunthapurramuloo', duration: '3:17', rating: 4, poster: 'https://m.media-amazon.com/images/M/MV5BMzg1MzJhY2QtMzViMi00Mjk4LWIxNGQtZWZjZWUzZjk2ZmQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { name: 'Oo Antava', artist: 'Indravathi Chauhan', album: 'Pushpa', duration: '3:25', rating: 5, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRVWtzOc5fVpvwUp58qsl85ADsymgXkCorA&s' },
    { name: 'Rowdy Baby', artist: 'Dhanush', album: 'Maari 2', duration: '4:41', rating: 5, poster: 'https://i.pinimg.com/736x/ee/29/83/ee29838a6ce9cda18c8fce9dbdbb729c.jpg' },
    { name: 'Vaathi Coming', artist: 'Anirudh Ravichander', album: 'Master', duration: '3:49', rating: 4, poster: 'https://e0.pxfuel.com/wallpapers/668/838/desktop-wallpaper-vaathi-coming.jpg' },
    { name: 'Arabic Kuthu', artist: 'Anirudh Ravichander', album: 'Beast', duration: '4:10', rating: 5, poster: 'https://live.staticflickr.com/65535/51878979296_58a64e67cc_b.jpg' },
    { name: 'Srivalli', artist: 'Sid Sriram', album: 'Pushpa', duration: '3:40', rating: 5, poster: 'https://mjmusicnotes.com/wp-content/uploads/2022/08/FBjZzbEVEAQ7RkZ.jpg' },
    { name: 'Dosti', artist: 'Kaala Bhairava', album: 'RRR', duration: '4:00', rating: 4, poster: 'https://i.pinimg.com/736x/fd/4d/b1/fd4db1667a8b31117dac90c3d43d7b8d.jpg' },
    { name: 'Seeti Maar', artist: 'DSP', album: 'DJ', duration: '3:22', rating: 4, poster: 'https://i.pinimg.com/736x/05/ff/bb/05ffbb294790371b91532e6fe4940cb6.jpg' }
  ];
}
