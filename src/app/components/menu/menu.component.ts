import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';


@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    directives: [],
    providers: [Logger],
    styleUrls: ['menu.component.css'],
    pipes: []
})
export class MenuComponent implements OnInit, OnDestroy {

    constructor(public logger: Logger) { }

    private menuWidth: number;
    private mobileMenu: string;

    ngOnInit() {
        this.menuWidth = window.innerWidth;
        this.logger.debug('MenuComponent init for window: ', this.menuWidth);
        this.mobileMenu = this.menuWidth < 768 ? 'small' : 'medium';
    }

    ngOnDestroy() { }

    onResize(event) {
        this.logger.info('resize: ', event.target.window.innerWidth);
        this.menuWidth = event.target.window.innerWidth;
        this.mobileMenu = this.menuWidth < 800 ? 'small' : 'medium';
    }

}
