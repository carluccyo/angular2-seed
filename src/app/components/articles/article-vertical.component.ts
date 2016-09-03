import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Article } from './article.model';
import { Logger } from 'angular2-logger/core';

@Component({
    selector: 'article-vertical',
    template: `
          <div>
            <div class="col-sm-4">
              <img src="{{article.mediaUrl}}" class="img-responsive float-left">
            </div>
            <div class="col-sm-8">
              <h5>{{article.title}}</h5>
              <h2>{{article.title}}</h2>
              <p>{{article.description}}</p>
            </div>
          </div>
    `
})

export class ArticleVerticalComponent implements OnInit, OnDestroy {

    @Input() article: Article;

    constructor(private logger: Logger) { }

    ngOnInit() { }

    ngOnDestroy() { }

}
