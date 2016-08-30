import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'top-news-box',
    template: `
    <div class="row">

      <div class="col-sm-8">
        <img src="http://placehold.it/900x600" class="img-responsive">
      </div>

      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-12">
            <img src="http://placehold.it/300x200" class="img-responsive float-left">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <img src="http://placehold.it/300x200" class="img-responsive float-left">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <img src="http://placehold.it/300x200" class="img-responsive float-left">
          </div>
        </div>
      </div>

    </div>
    `,
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class TopNewsBoxComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
