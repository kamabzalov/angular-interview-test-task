import { NgModule } from '@angular/core';
import { ControlsModule } from '../controls.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [DashboardComponent, SidebarComponent],
    imports: [
        CommonModule,
        ControlsModule
    ]
})
export class PublicModule {
}
