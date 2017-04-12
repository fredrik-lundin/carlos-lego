import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LegoListComponent } from './lego-list/lego-list.component';
import { UpdateContentComponent } from './update-content/update-content.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LegoListComponent
      },
      {
        path: 'update',
        component: UpdateContentComponent
      }]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }