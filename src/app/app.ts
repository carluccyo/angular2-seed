import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Logger, Level } from 'angular2-logger/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
    selector: 'app',
    pipes: [],
    providers: [Logger],
    directives: [ROUTER_DIRECTIVES, MenuComponent],
    template: require('to-string!./app.html'),
})
export class App implements OnInit {

    constructor(public logger: Logger) { }

    ngOnInit() {
        this.loggerSetup();
    }

    loggerSetup = () => {
        var logLevel = Level.LOG
        this.logger.level = logLevel;
        this.logger.store();
        this.logger.info('set logger to Level', logLevel);
    }

}
