import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from '../services/users/user';
import { UsersService } from '../services/users/users.service';
import { Album } from '../services/albums/album';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

    users: User[] = [];
    userAlbums: Album[] = [];
    @Output() getAlbums = new EventEmitter<Album[]>();

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(result => {
            if (result) {
                this.users = result;
            }
        });
    }

    showUsersAlbums(id: number) {
        this._usersService.getAlbumsByUserId(id).subscribe(result => {
            if (result) {
                this.userAlbums = result;
                this.getAlbums.emit(this.userAlbums);
            }
        });
    }

}
