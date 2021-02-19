import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Album } from '../albums/album';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient,
              private _configService: ConfigService) {
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._configService.restUrl + 'users');
  }

  getAlbumsByUserId(userId: number): Observable<Album[]> {
    return this._http.get<Album[]>(this._configService.restUrl + `albums?userId=${userId}`);
  }
}
