import { Component, OnInit } from '@angular/core';
import { ItemListService } from './itemList.service';
import { Item } from './item.model';
import {ItemComponent} from './item.component';
import {Logger} from 'angular2-logger/core';

@Component({
    selector: 'item-list',
    template: `
    <div class="item-list">
        <h1>{{title}}</h1>
        <ul class="items">
        <li class="row" *ngFor="let item of items"
            [class.selected]="item === selectedItem"
            (click)="onSelect(item)">
            <item-detail [item] = "item"></item-detail>
        </li>
        </ul>
    </div>
    `,
    providers: [ItemListService, Logger]
})
export class ItemListComponent implements OnInit {

    title = 'List of items';
    items: Item[];
    selectedItem: Item;

    constructor(private itemListService: ItemListService, public logger:Logger) { }

    ngOnInit() {
        this.logger.debug('ItemListComponent init...');
        this.getItems();
    }

    getItems() {
        this.itemListService.getItems().then(items => this.items = items);
    }

}
