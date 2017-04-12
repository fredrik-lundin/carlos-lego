import { NgModule } from '@angular/core';
import {
    MdListModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdProgressBarModule,
    MdTooltipModule
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
        MdTooltipModule],
    exports: [
        MdListModule,
        MdToolbarModule,
        MdMenuModule,
        MdIconModule,
        MdButtonModule,
        MdInputModule,
        MdProgressBarModule,
        MdTooltipModule],
})
export class CustomMaterialModule { }
