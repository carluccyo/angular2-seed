import { Component, OnInit } from '@angular/core';

import { Logger, Level } from 'angular2-logger/core';


@Component({
    selector: 'app',
    providers: [Logger],
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
