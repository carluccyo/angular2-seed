import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { VerticalBoxComponent} from './vertical-box.component';

@Component({
    selector: 'article-detail',
    template: `
      <div class="row">
        <div class="col-sm-9">
          <div class="jumbotron">
            <h1>Hello, world!</h1>
            <p>...</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
        </div>
        <div class="col-sm-3">
          <vertical-box></vertical-box>
        </div>
      </div>
    `,
    directives: [VerticalBoxComponent]
})

export class ArticleDetailComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

}
