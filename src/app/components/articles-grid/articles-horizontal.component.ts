import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'articles-horizontal',
    template: `
    <div class="row">

      <h3>articles-horizontal</h3>

      <div class="col-sm-3">
        <img src="http://placehold.it/300x200" class="img-responsive float-left">
      </div>
      <div class="col-sm-3">
        <img src="http://placehold.it/300x200" class="img-responsive float-left">
      </div>
      <div class="col-sm-3">
        <img src="http://placehold.it/300x200" class="img-responsive float-left">
      </div>
      <div class="col-sm-3">
        <img src="http://placehold.it/300x200" class="img-responsive float-left">
      </div>

    </div>
    `,
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class ArticlesHorizontalComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
