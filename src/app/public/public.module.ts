import { NgModule } from '@angular/core';
import { ControlsModule } from '../controls.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        AlbumsComponent,
        PhotosComponent
    ],
    imports: [
        CommonModule,
        ControlsModule,
        FormsModule
    ]
})
export class PublicModule {
}
