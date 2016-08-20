import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';


@Component({
    selector: 'menu',
    template: `
      <div>menu item list</div>
    `,
    directives: [],
    providers: [Logger],
    styleUrls: [],
    pipes: []
})

export class NameComponent implements OnInit, OnDestroy {

    constructor(public logger: Logger) {

    }

    ngOnInit() {
        this.logger.debug('ItemListComponent init...');
    }

    ngOnDestroy() {
    }

}
