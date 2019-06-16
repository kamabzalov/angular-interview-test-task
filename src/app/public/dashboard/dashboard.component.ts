import { Component, OnInit } from '@angular/core';
import { Album } from '../services/albums/album';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    albums: Album[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    getUserAlbums($event: Album[]) {
        this.albums = $event;
    }

}
