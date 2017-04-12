import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      <span>Lego wish list</span>

      <span class="fill-remaining-space"></span>

      <md-menu #appMenu="mdMenu">
        <a md-menu-item routerLink="/"> List </a>
        <a md-menu-item routerLink="/update"> Update JSON </a>
      </md-menu>
      
      <button md-icon-button [mdMenuTriggerFor]="appMenu">
         <md-icon>more_vert</md-icon>
      </button>
    </md-toolbar>

    <router-outlet></router-outlet>
    `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {}
