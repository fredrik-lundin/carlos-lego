import { Component, OnInit } from '@angular/core';
import { LegoService } from '../shared/lego.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-update-content',
  template: `
    <md-input-container [style.border-bottom-color]="validJson ? 'green' : 'red'">
      <textarea rows="15" [(ngModel)]="jsonString" mdInput placeholder="Paste your JSON data here"></textarea>
    </md-input-container>
    <button [disabled]="!validJson" md-raised-button (click)="updateJson()">Update JSON</button>
  `,
  styles: [
    `
      .mat-input-container {
        width: 100%;
        margin-top: 20px;
        border-bottom: 10px solid;
      }

      .mat-raised-button {
        margin-top: 15px;
      }
    `
  ]
})
export class UpdateContentComponent implements OnInit {
  jsonString: string;
  afJson: FirebaseObjectObservable<any>;

  get validJson(): boolean {
    if (this.jsonString) {
      try {
        JSON.parse(this.jsonString);
        return true;
      } catch (err) {
        return false;
      }}
      return false;
  }
  constructor(private service: LegoService) { }

  ngOnInit() {
    this.afJson = this.service.getAfJson();
    this.jsonString = '';
  }

  updateJson(): void {
    this.service.updateItems(this.afJson, JSON.parse(this.jsonString));
  }
}
