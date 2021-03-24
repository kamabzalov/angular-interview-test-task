import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { UsersService } from '../services/users/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../services/users/user';
import { of } from 'rxjs';
import { Album } from '../services/albums/album';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
      imports: [HttpClientTestingModule, FormsModule],
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

  it('should search field', () => {
    const icon = fixture.debugElement.nativeElement.querySelector('.col-8 .clickable');
    icon.click();
    expect(component.showSearch).toBeTrue();
  });

  it('should hide search field', () => {
    component.closeSearchField();
    expect(component.showSearch).toBeFalse();
  });

  it('should hide search field', () => {
    component.closeSearchField();
    expect(component.showSearch).toBeFalse();
  });

  it('should return users list when hide search field', () => {
    component.closeSearchField();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should return empty albums list when hide search field', () => {
    spyOn(component.getAlbums, 'emit');
    component.closeSearchField();
    expect(component.getAlbums.emit).toHaveBeenCalledWith([]);
  });

  it('should search user by query', () => {
    component.showSearchField();
    fixture.detectChanges();
    component.user = 'Leanne';
    component.searchByQuery();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should search user by query and return empty result', () => {
    component.showSearchField();
    fixture.detectChanges();
    component.user = 'not found user name';
    component.searchByQuery();
    expect(component.users.length).toEqual(0);
  });

  it('should return users list and empty albums list when reset search value', () => {
    spyOn(component.getAlbums, 'emit');
    component.clearSearch();
    expect(component.users.length).toBeGreaterThan(0);
    expect(component.getAlbums.emit).toHaveBeenCalledWith([]);
  });

});
