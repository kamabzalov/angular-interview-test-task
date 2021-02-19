import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _restUrl = 'http://jsonplaceholder.typicode.com/';

  get restUrl() {
    return this._restUrl;
  }

}
