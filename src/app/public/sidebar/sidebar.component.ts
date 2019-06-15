import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../services/users/user';
import { UsersService } from '../services/users/users.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

    users: User[] = [];

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(result => {
            if (result) {
                this.users = result;
            }
        });
    }

    showUsersAlbums() {
        console.log(1);
    }

}
