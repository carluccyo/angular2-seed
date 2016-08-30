import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'top-news-box',
    template: `
    <div class="row m-t">

      <div class="col-sm-8">
        <div class="row p-sm">
          <img src="http://placehold.it/900x600" class="img-responsive">
        </div>
      </div>

      <div class="col-sm-4">

        <div class="row p-sm">
          <div class="col-sm-12">
            <img src="http://placehold.it/300x200" class="img-responsive float-left">
          </div>
        </div>

        <div class="row p-sm">
          <div class="col-sm-12">
            <img src="http://placehold.it/300x200" class="img-responsive float-left">
          </div>
        </div>

        <div class="row p-sm">
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
    styles: [' .p-sm { padding: 2px } .m-t{ margin-top: 5px}'],
    pipes: []
})

export class TopNewsBoxComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
