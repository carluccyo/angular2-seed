import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticlesHorizontalService } from './articles-horizontal.service';
import { Logger } from 'angular2-logger/core';
import { Article } from './article.model';

@Component({
    selector: 'articles-horizontal',
    template: `

    <div class="row">

      <div class="col-sm-3 habox-wrapp" *ngFor="let article of articles" >

        <div class="habox text-center">
            <img src="{{article.mediaUrl}}" alt="" class="img-responsive">
            <div class="caption">
                <p>{{article.title}}</p>
            </div>
        </div>

      </div>

    </div>
    `,
    directives: [],
    providers: [ArticlesHorizontalService],
    styles: [`

      .habox-wrapp{
        padding: 2px ;
      }

      .habox {
          position: relative;
      }

      .caption {
          position: absolute;
          bottom: 1%;
          left: 0;
          width: 100%;
      }

      `],
    pipes: []
})

export class ArticlesHorizontalComponent implements OnInit, OnDestroy {

    articles: Article[];

    constructor(private articlesHorizontalService: ArticlesHorizontalService, public logger: Logger) { }

    ngOnInit() {
      this.getArticles();
    }

    ngOnDestroy() {}

    getArticles() {
        this.articlesHorizontalService.getArticles().then(articles => this.articles = articles);
    }

}
