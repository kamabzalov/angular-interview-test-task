import { Component, OnInit } from '@angular/core';
import { Album } from '../services/albums/album';
import { Photo } from '../services/photos/photo';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    albums: Album[] = [];
    photos: Photo[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    getUserAlbums($event: Album[]) {
        this.albums = $event;
    }

    getPhotosList($event: Photo[]) {
        this.photos = $event;
    }

}
