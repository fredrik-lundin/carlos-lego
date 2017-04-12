import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LegoService } from '../shared/lego.service';
import { LegoItem } from '../shared/lego-item.model';

@Component({
  selector: 'app-lego-list',
  template: `
    <md-progress-bar *ngIf="!(data | async)" mode="indeterminate"></md-progress-bar>
    <md-list>
      <app-lego-item *ngFor="let item of data | async let i = index"
                     [item]="item" 
                     [isAlternateRow]="isAlternateRow(i)">
      </app-lego-item>
    </md-list>
  `,
  styles: []
})
export class LegoListComponent implements OnInit {
  data: Observable<LegoItem[]>;

  constructor(private service: LegoService) { }

  ngOnInit() {
    this.data = this.service.getLegoItemsAf();
  }

  isAlternateRow(index: number): boolean {
    return (index + 1) % 2 === 0;
  }
}
