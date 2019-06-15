import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule
    ],
    exports: [
        MatIconModule,
        MatListModule,
        MatCheckboxModule
    ]
})
export class ControlsModule {
}
