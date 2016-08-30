import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticlesVerticalService } from './articles-vertical.service';
import { Article } from './article.model';
import { Logger } from 'angular2-logger/core';

@Component({
    selector: 'articles-vertical',
    template: `
          <div class="row m-t" *ngFor="let article of articles">
            <div class="col-sm-4">
              <img src="{{article.mediaUrl}}" class="img-responsive float-left">
            </div>
            <div class="col-sm-8">
              <h5>{{article.title}}</h5>
              <h2>{{article.title}}</h2>
              <p>{{article.description}}</p>
            </div>
          </div>
    `,
    directives: [],
    providers: [ArticlesVerticalService],
    styleUrls: [],
    styles: [' .m-t { margin-top: 10px }'],
    pipes: []
})

export class ArticlesVerticalComponent implements OnInit, OnDestroy {

    articles: Article[];

    constructor(private logger: Logger, private articlesVerticalService: ArticlesVerticalService) { }

    ngOnInit() {
        this.articlesVerticalService.getArticles().then(articles => this.articles = articles);
    }

    ngOnDestroy() { }

}
