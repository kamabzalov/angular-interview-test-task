import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photos/photo';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    private _path = 'http://jsonplaceholder.typicode.com/';

    constructor(private _http: HttpClient) {
    }

    getAlbumPhotos(albumId: number): Observable<Photo[]> {
        return this._http.get<Photo[]>(this._path + `photos?albumId=${albumId}`);
    }
}
