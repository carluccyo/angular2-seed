import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';


@Component({
    selector: 'menu',
    template: `
      <nav>
          <ul>
            <li><a [routerLink]="['/']">Home</a></li>
            <li><a [routerLink]="['/items']">ItemList</a></li>
            <li><a [routerLink]="['/about']">About</a></li>
            <li><a [routerLink]="['/github', 'angular']">Github Repos</a></li>
          </ul>
      </nav>
    `,
    directives: [],
    providers: [Logger],
    styleUrls: ['./menu.component.css'],
    pipes: []
})

export class MenuComponent implements OnInit, OnDestroy {

    constructor(public logger: Logger) {

    }

    ngOnInit() {
        this.logger.debug('ItemListComponent init...');
    }

    ngOnDestroy() {
    }

}
