import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from '../config/config.service';
import { User } from './user';
import { Album } from '../albums/album';


describe('UsersService', () => {
  let httpTestingController: HttpTestingController;
  let usersService: UsersService;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    usersService = TestBed.inject(UsersService);
    configService = TestBed.inject(ConfigService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('should return users list', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      }
    ];
    usersService.getUsers().subscribe(response => expect(response).toBe(mockUsers));
    const req = httpTestingController.expectOne(`${configService.restUrl}users`);
    req.flush(mockUsers);
  });

  it('should return albums list by user id', () => {
    const mockAlbums: Album[] = [
      {
        userId: 1,
        id: 1,
        title: 'quidem molestiae enim'
      },
      {
        userId: 1,
        id: 2,
        title: 'sunt qui excepturi placeat culpa'
      }
    ];
    const userId = 1;
    usersService.getAlbumsByUserId(userId).subscribe(response => expect(response).toBe(mockAlbums));
    const req = httpTestingController.expectOne(`${configService.restUrl}albums?userId=${userId}`);
    req.flush(mockAlbums);
  });
});
