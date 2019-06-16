import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class ControlsModule {
}
