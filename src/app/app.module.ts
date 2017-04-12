import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';
import { firebaseConfig } from './shared/firebase-config';

import { AppMaterialModule } from './shared-modules/app-material.module';
import { AppRoutingModule } from './shared-modules/app-routing.module';

import { AppComponent } from './app.component';
import { LegoListComponent } from './lego-list/lego-list.component';
import { LegoService } from './shared/lego.service';
import { UpdateContentComponent } from './update-content/update-content.component';
import { LegoItemComponent } from './lego-item/lego-item.component';
import { LegoDialogComponent } from './lego-list/lego-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LegoListComponent,
    UpdateContentComponent,
    LegoItemComponent,
    LegoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    AppMaterialModule
  ],
  entryComponents: [LegoDialogComponent],
  providers: [LegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
