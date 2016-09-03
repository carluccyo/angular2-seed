import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticlesVerticalService } from './articles-vertical.service';
import { Article } from './article.model';
import { Logger } from 'angular2-logger/core';
import { ArticleVerticalComponent } from './article-vertical.component';

@Component({
    selector: 'articles-vertical',
    template: `
          <div class="row m-t article-box" *ngFor="let article of articles">
            <article-vertical [article] = "article" ></article-vertical>
          </div>
    `,
    providers: [ArticlesVerticalService],
    styles: ['.m-t { margin-top: 5px } .article-box { border-top : 1px solid #ebebeb; padding-top : 10px; padding-bottom : 10px }']
})

export class ArticlesVerticalComponent implements OnInit, OnDestroy {

    articles: Article[];

    constructor(private logger: Logger, private articlesVerticalService: ArticlesVerticalService) { }

    ngOnInit() {
        this.articlesVerticalService.getArticles().then(articles => this.articles = articles);
    }

    ngOnDestroy() { }

}
