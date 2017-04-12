import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { LegoItem } from '../shared/lego-item.model';

@Component({
  selector: 'app-lego-dialog',
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar [src]="item?.ImageUrl">
        <md-card-title>{{item?.Name}}</md-card-title>
        <md-card-subtitle>From list: {{item?.ListName}}</md-card-subtitle>
      </md-card-header>
        <md-card-content>
          <div [style.border-top]="'10px solid #' + item.ColorCode">
            <md-list>
              <md-list-item>
                Item Code: {{item?.Code}}
              </md-list-item>
              <md-list-item>
                Color Code: {{item?.ColorCode}}
              </md-list-item>
              <md-list-item>
                Color Name: {{item?.ColorName}}
              </md-list-item>
              <md-list-item>
                Quantity: {{item?.Quantity}}
              </md-list-item>
            </md-list>
          </div>
        </md-card-content>
      <md-card-actions>
          <button md-button (click)="dialogRef.close()">CLOSE</button>
        </md-card-actions>
    </md-card>
  `,
  styles: []
})
export class LegoDialogComponent implements OnInit {
  item: LegoItem;
  constructor(public dialogRef: MdDialogRef<LegoDialogComponent>) { }

  ngOnInit() {
  }

}
