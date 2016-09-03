import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'vertical-box',
    template: `
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
    `,
    styles: [' .p-sm { padding: 2px } .m-t{ margin-top: 5px}']
})

export class VerticalBoxComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
