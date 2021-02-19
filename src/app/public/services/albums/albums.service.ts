import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photos/photo';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private _http: HttpClient,
              private _configService: ConfigService) {
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this._http.get<Photo[]>(this._configService.restUrl + `photos?albumId=${albumId}`);
  }
}
