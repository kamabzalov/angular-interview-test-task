import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {AlbumsService} from '../services/albums/albums.service';
import {Photo} from '../services/photos/photo';
import {Album} from '../services/albums/album';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnChanges {

  @Input()
  albums: Album[] = [];
  @Output()
  getPhotos = new EventEmitter<Photo[]>();

  constructor(private _albumsService: AlbumsService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.albums.currentValue.length) {
      this.getPhotos.emit([]);
    }
  }

  getAlbumPhotos(album: Album) {
    if (album.selected) {
      this._albumsService.getAlbumPhotos(album.id).subscribe(value => {
        if (value) {
          this.getPhotos.emit(value);
        }
      });
    } else {
      this.getPhotos.emit([]);
    }
  }

  trackByFn(index: number, element: Album) {
    return element.id;
  }

  selectAll($event: MatCheckboxChange) {
    this.albums.map(album => album.selected = $event.checked);
  }
}
