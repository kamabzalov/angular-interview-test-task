import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Album } from '../albums/album';
import { debounceTime, map } from 'rxjs/operators';

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

    searchUserByQuery(query: string): Observable<User[]> {
        return this._http.get<User[]>(this._path + `users?name=${query}`);
    }
}
