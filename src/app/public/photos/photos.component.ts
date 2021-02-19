import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../services/photos/photo';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent {

  @Input()
  photos: Photo[] = [];

}
