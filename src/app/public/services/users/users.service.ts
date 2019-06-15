import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

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
}
