import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticlesHorizontalService } from './articles-horizontal.service';
import { Logger } from 'angular2-logger/core';
import { Article } from '../article.model';

import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'articles-horizontal',
    template: `

      <div class="row">

        <div class="col-sm-2 habox-wrapp" *ngFor="let article of articles" >
          <a itemprop="url" [routerLink]="['/article', article.id]">
            <div class="habox text-center">
                <img src="{{article.mediaUrl}}" alt="" class="img-responsive">
                <div class="caption">
                    <p>{{article.title}}</p>
                </div>
            </div>
          </a>
        </div>

      </div>

    `,
    providers: [ArticlesHorizontalService],
    styles: [`

      .habox-wrapp {
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

      `]
})

export class ArticlesHorizontalComponent implements OnInit, OnDestroy {

    articles: Article[];

    constructor(private articlesHorizontalService: ArticlesHorizontalService, public logger: Logger) { }

    ngOnInit() {
        this.getArticles();
    }

    ngOnDestroy() { }

    getArticles() {
        this.articlesHorizontalService.getArticles().then(articles => this.articles = articles);
    }

}
