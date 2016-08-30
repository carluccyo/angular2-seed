import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticlesHorizontalComponent } from './horizontal/articles-horizontal.component';
import { TopNewsBoxComponent } from './top-news-box.component';
import { ArticlesVerticalComponent } from './articles-vertical.component';

@Component({
    selector: 'articles-grid',
    template: `
      <articles-horizontal></articles-horizontal>
      <top-news-box></top-news-box>
      <articles-vertical></articles-vertical>
    `,
    directives: [ArticlesHorizontalComponent, TopNewsBoxComponent, ArticlesVerticalComponent],
    providers: [],
    styleUrls: [],
    pipes: []
})
export class ArticlesGridComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
