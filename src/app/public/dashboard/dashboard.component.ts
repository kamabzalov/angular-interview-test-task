import { Component } from '@angular/core';
import { Album } from '../services/albums/album';
import { Photo } from '../services/photos/photo';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  albums: Album[] = [];
  photos: Photo[] = [];

  getUserAlbums($event: Album[]) {
    this.photos = [];
    this.albums = $event;
    this.albums.map(album => album.selected = false);
  }

  getPhotosList($event: Photo[]) {
    this.photos = $event;
  }

}
