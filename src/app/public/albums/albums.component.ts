import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AlbumsService} from '../services/albums/albums.service';
import {Photo} from '../services/photos/photo';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumsComponent implements OnInit {

  @Input()
  albums = [];
  @Output()
  getPhotos = new EventEmitter<Photo[]>();

  constructor(private _albumsService: AlbumsService) {
  }

  ngOnInit() {
  }

  getAlbumPhotos(albumId: number) {
    this._albumsService.getAlbumPhotos(albumId).subscribe(value => {
      if (value) {
        this.getPhotos.emit(value);
      }
    });
  }
}
