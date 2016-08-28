import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

const BUTTONS_SELECTOR = 'buttons';

@Component({
    selector: BUTTONS_SELECTOR,
    template: require('to-string!./buttons.html'),
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class Buttons implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
