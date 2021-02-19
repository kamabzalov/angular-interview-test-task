import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../services/users/user';
import { UsersService } from '../services/users/users.service';
import { Album } from '../services/albums/album';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  users: User[] = [];
  usersCopy: User[] = [];
  userAlbums: Album[] = [];
  showSearch = false;
  user = '';
  @Output() getAlbums = new EventEmitter<Album[]>();

  constructor(private _usersService: UsersService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._usersService.getUsers().subscribe(result => {
      if (result) {
        this.users = result;
        this.usersCopy = result;
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
    const filteredUsers = this.users.filter(user => user.name.includes(this.user) || user.username.includes(this.user));
    if (this.user) {
      this.users = filteredUsers;
    } else {
      this.users = this.usersCopy;
    }
  }

  clearSearch() {
    this.user = '';
    this.getAllUsers();
  }

  trackByFn(index: number, user: User) {
    return user.id;
  }
}
