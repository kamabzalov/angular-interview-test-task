import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Album } from '../albums/album';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private _path = 'http://jsonplaceholder.typicode.com/';

    constructor(private _http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this._http.get<User[]>(this._path + 'users');
    }

    getAlbumsByUserId(userId: number): Observable<Album[]> {
        return this._http.get<Album[]>(this._path + `albums?userId=${userId}`);
    }
}
