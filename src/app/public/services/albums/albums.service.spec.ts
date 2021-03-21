import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from '../config/config.service';
import { Photo } from '../photos/photo';

describe('AlbumsService', () => {
  let albumsService: AlbumsService;
  let configService: ConfigService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumsService]
    });

    albumsService = TestBed.inject(AlbumsService);
    configService = TestBed.inject(ConfigService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(albumsService).toBeTruthy();
  });

  it('should return album photos list', () => {
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
    const albumId = 1;
    albumsService.getAlbumPhotos(albumId).subscribe(response => expect(response).toBe(mockPhotos));
    const req = httpTestingController.expectOne(`${configService.restUrl}photos?albumId=${albumId}`);
    req.flush(mockPhotos);
  });

});
