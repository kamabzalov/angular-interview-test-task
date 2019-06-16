import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { User } from '../services/users/user';
import { UsersService } from '../services/users/users.service';
import { Album } from '../services/albums/album';
import { debounceTime, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

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
    showSearch = false;
    user = '';
    @ViewChild('userSearch', { static: false }) userSearch;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
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

    showSearchField() {
        this.showSearch = true;
    }

    closeSearchField() {
        this.showSearch = false;
    }

    searchByQuery() {
        const searchBox$ = fromEvent(this.userSearch.nativeElement, 'keyup');
        searchBox$.pipe(
            debounceTime(500)
        ).subscribe(() => {
            this._usersService.searchUserByQuery(this.user).subscribe(value => {
                if (value) {
                    this.users = value;
                }
            });
        });
    }

    clearSearch() {
        this.user = '';
        this.getAllUsers();
    }
}
