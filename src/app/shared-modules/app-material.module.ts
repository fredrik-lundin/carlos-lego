import { NgModule } from '@angular/core';
import {
    MdListModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdProgressBarModule,
    MdTooltipModule,
    MdDialogModule,
    MdCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MdListModule,
        MdToolbarModule,
        MdMenuModule,
        MdIconModule,
        MdButtonModule,
        MdInputModule,
        MdProgressBarModule,
        MdTooltipModule,
        MdDialogModule,
        MdCardModule
        ],
    exports: [
        MdListModule,
        MdToolbarModule,
        MdMenuModule,
        MdIconModule,
        MdButtonModule,
        MdInputModule,
        MdProgressBarModule,
        MdTooltipModule,
        MdDialogModule,
        MdCardModule
        ],
})
export class AppMaterialModule { }
