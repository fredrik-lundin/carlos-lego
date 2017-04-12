import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';
import { firebaseConfig } from './shared/firebase-config';

import { CustomMaterialModule } from './custom-material.module';
import { AppRoutingModule } from './routes.module';

import { AppComponent } from './app.component';
import { LegoListComponent } from './lego-list/lego-list.component';
import { LegoService } from './shared/lego.service';
import { UpdateContentComponent } from './update-content/update-content.component';
import { LegoItemComponent } from './lego-item/lego-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LegoListComponent,
    UpdateContentComponent,
    LegoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [LegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
