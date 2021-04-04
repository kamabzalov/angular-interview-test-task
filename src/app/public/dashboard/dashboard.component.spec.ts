import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { Album } from '../services/albums/album';
import { Photo } from '../services/photos/photo';

@Component({
  selector: 'sidebar',
  template: ''
})
class SidebarStubComponent {
  @Output() getAlbums = new EventEmitter<Album[]>();
}

@Component({
  selector: 'photos',
  template: ''
})
class AlbumsStubComponent {
  @Output() getPhotos = new EventEmitter<Photo[]>();
}

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
  }
];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, SidebarStubComponent, AlbumsStubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user albums', () => {
    const sidebar = new SidebarStubComponent();
    spyOn(sidebar.getAlbums, 'emit');
    sidebar.getAlbums.emit(mockAlbums);
    component.getUserAlbums(mockAlbums);
    expect(component.albums.length).toEqual(2);
  });

  it('should get empty photos', () => {
    const sidebar = new SidebarStubComponent();
    sidebar.getAlbums.emit(mockAlbums);
    component.getUserAlbums(mockAlbums);
    expect(component.photos.length).toEqual(0);
  });

  it('should get photos list', () => {
    const albums = new AlbumsStubComponent();
    albums.getPhotos.emit(mockPhotos);
    component.getPhotosList(mockPhotos);
    expect(component.photos.length).toEqual(2);
  });
});
