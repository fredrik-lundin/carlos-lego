import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { LegoItem } from './lego-item.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Injectable()
export class LegoService {

  constructor(private af: AngularFire, private http: Http) { }

  getLegoItems(): Observable<LegoItem[]> {
    return this.http.get('assets/_data.json')
      .map(d => d.json().wantedItems.map(item => {
        const legoItem = new LegoItem();
        legoItem.Code = item.itemNo;
        legoItem.Name = item.itemName;
        legoItem.ImageUrl = item.imgURL;
        legoItem.Quantity = item.wantedQty;
        legoItem.ColorName = item.colorName;
        legoItem.ColorCode = item.colorHex;
        legoItem.ListName = item.wantedMoreName;

        return legoItem;
      })
        .sort((a: LegoItem, b: LegoItem) => {
          return a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0;
        }));
  }

  getLegoItemsAf(): Observable<LegoItem[]> {
    return this.af.database.list('/items')
      .map(d => d[0].wantedItems.map(item => {
        const legoItem = new LegoItem();
        legoItem.Code = item.itemNo;
        legoItem.Name = item.itemName;
        legoItem.ImageUrl = item.imgURL;
        legoItem.Quantity = item.wantedQty;
        legoItem.ColorName = item.colorName;
        legoItem.ColorCode = item.colorHex;
        legoItem.ListName = item.wantedMoreName;

        return legoItem;
      })
        .sort((a: LegoItem, b: LegoItem) => {
          return a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0;
        })).catch(err => {
          console.error(err);
          return [];
        });
  }

  getAfJson() {
    return this.af.database.object('/items');
  }

  updateItems(toUpdate: any, json: any): void {
    toUpdate.update({ json });
  }

}
