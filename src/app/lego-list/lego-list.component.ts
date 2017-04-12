import { LegoDialogComponent } from './lego-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LegoService } from '../shared/lego.service';
import { LegoItem } from '../shared/lego-item.model';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-lego-list',
  template: `
    <md-progress-bar *ngIf="!(data | async)" mode="indeterminate"></md-progress-bar>
    <md-list>
      <app-lego-item *ngFor="let item of data | async let i = index"
                     [item]="item"
                     [isAlternateRow]="isAlternateRow(i)"
                     (avatarClick)="openInfoDialog(item)">
      </app-lego-item>
    </md-list>
  `,
  styles: []
})
export class LegoListComponent implements OnInit {
  data: Observable<LegoItem[]>;

  constructor(private service: LegoService, private dialog: MdDialog) { }

  ngOnInit() {
    this.data = this.service.getLegoItemsAf();
  }

  openInfoDialog(item: LegoItem) {
    const dialogRef = this.dialog.open(LegoDialogComponent);
    dialogRef.componentInstance.item = item;
  }

  isAlternateRow(index: number): boolean {
    return (index + 1) % 2 === 0;
  }
}
