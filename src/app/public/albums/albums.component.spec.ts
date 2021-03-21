import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { AlbumsService } from '../services/albums/albums.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlbumsComponent],
      providers: [AlbumsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
