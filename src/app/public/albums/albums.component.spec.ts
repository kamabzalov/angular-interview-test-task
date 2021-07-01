import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AlbumsComponent} from './albums.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {of} from 'rxjs';
import {Photo} from '../services/photos/photo';
import {AlbumsService} from '../services/albums/albums.service';
import {Album} from '../services/albums/album';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  const mockPhotos: Photo[] = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796'
    },
  ];
  const mockInputAlbums: Album[] = [
    {
      id: 1,
      title: 'quidem molestiae enim',
      userId: 1
    },
    {
      id: 2,
      title: 'sunt qui excepturi placeat culpa',
      userId: 1
    }
  ];

  const albumsService = jasmine.createSpyObj(['AlbumsService', ['getAlbumPhotos']]);
  albumsService.getAlbumPhotos.and.returnValue(of(mockPhotos));

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlbumsComponent],
      providers: [{
        provide: AlbumsService,
        useValue: albumsService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    component.albums = mockInputAlbums;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calls album service one time and call it with album id param', () => {
    const album = {
      userId: 2,
      id: 11,
      title: 'quam nostrum impedit mollitia quod et dolor',
      selected: true
    };
    component.getAlbumPhotos(album);
    expect(albumsService.getAlbumPhotos).toHaveBeenCalled();
    expect(albumsService.getAlbumPhotos).toHaveBeenCalledWith(album.id);
  });

  it('should emit result photos array after service return result', () => {
    spyOn(component.getPhotos, 'emit');
    const album = {
      userId: 2,
      id: 11,
      title: 'quam nostrum impedit mollitia quod et dolor',
      selected: true
    };
    component.getAlbumPhotos(album);
    expect(component.getPhotos.emit).toHaveBeenCalledWith(mockPhotos);
  });

  it('should emit empty photos array after service return result', () => {
    spyOn(component.getPhotos, 'emit');
    const album = {
      userId: 2,
      id: 11,
      title: 'quam nostrum impedit mollitia quod et dolor',
      selected: false
    };
    component.getAlbumPhotos(album);
    expect(component.getPhotos.emit).toHaveBeenCalledWith([]);
  });

  it('must select all albums', () => {
    const evt: MatCheckboxChange = {
      source: null,
      checked: true
    };
    component.selectAll(evt);
    const selectedAlbums = component.albums.filter(album => album.selected);
    expect(selectedAlbums.length).toEqual(component.albums.length);
  })
});
