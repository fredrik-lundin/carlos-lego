import { LegoItem } from '../shared/lego-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lego-item',
  template: `
      <md-list-item 
        [style.background-color]="isAlternateRow ? '#FAFAFA' : '#FDFDFD' "   
        [style.border-left-color]="'#' + item.ColorCode">
        <img md-list-avatar [src]="item.ImageUrl" 
             [style.box-shadow]="'2px 2px 2px #' + item.ColorCode"
             mdTooltip="Click for more info" [mdTooltipPosition]="'above'">
        <h3 md-line> {{item.Name}} </h3>
        <p md-line>
          <span class="item-property">Color name: </span> {{item.ColorName}} -
          <span class="item-property">Code: </span> {{item.Code}} -
          <span class="item-property">Quantity: </span> {{item.Quantity}} -
          <span class="item-property">In list:</span>  {{item.ListName}}
        </p>
        <hr>
      </md-list-item>
  `,
  styles: [`
    .mat-list-item {
      border-left: 10px solid;
      margin-bottom: 5px;
    }

    .mat-list-item h3 {
      font-weight: bold;
    }

    .item-property {
      font-style: italic;
    }

    .mat-list-avatar:hover {
      transform: translateX(-2px);
      transform: translateY(-2px);
      cursor: pointer;
    }
  `]
})
export class LegoItemComponent implements OnInit {
  @Input() item: LegoItem;
  @Input() isAlternateRow: boolean;

  constructor() { }

  ngOnInit() {
  }

}
