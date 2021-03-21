import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { UsersService } from '../services/users/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../services/users/user';
import { of } from 'rxjs';
import { Album } from '../services/albums/album';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let usersService: UsersService;

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

  class UsersServiceStub {
    getUsers() {
      return of(mockUsers);
    }
    getAlbumsByUserId() {
      return of(mockAlbums);
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SidebarComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    usersService = TestBed.inject(UsersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get users list', () => {
    component.ngOnInit();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should get albums by user id', () => {
    const userId = 1;
    component.showUsersAlbums(userId);
    expect(component.userAlbums.length).toBeGreaterThan(0);
  });

  it('should get empty albums list', () => {
    component.showUsersAlbums();
    expect(component.userAlbums.length).toEqual(0);
  });

  it('should emit albums list', () => {
    spyOn(component.getAlbums, 'emit');
    const item = fixture.debugElement.nativeElement.querySelector('.hoverable');
    item.click();
    expect(component.getAlbums.emit).toHaveBeenCalledWith(mockAlbums);
  });

});
