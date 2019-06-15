import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatIconModule,
        MatListModule
    ]
})
export class ControlsModule {
}
