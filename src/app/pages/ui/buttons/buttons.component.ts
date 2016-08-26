import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'buttons',
    template: require('to-string!./buttons.html'),
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class Buttons implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {}

    ngOnDestroy() {}

}
