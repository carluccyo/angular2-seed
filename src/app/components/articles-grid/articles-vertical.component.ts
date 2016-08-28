import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'articles-vertical',
    template: `
    <div class="row">
      <h3>articles-vertical</h3>
      <div class="col-sm-4">
        <img src="http://placehold.it/300x200" class="img-responsive float-left">
      </div>
      <div class="col-sm-8">
        <h5>titleh5</h5>
        <h2>titleh2</h2>
        <p>paragraph  paragraph  paragraph  paragraph  paragraph  paragraph  paragraph  paragraph  </p>
      </div>

    </div>
    `,
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class ArticlesVerticalComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
