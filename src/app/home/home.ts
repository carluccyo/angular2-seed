import { Component } from '@angular/core';
import { ArticlesGridComponent } from '../components/articles/articlesGrid.component';

const STYLES = require('!raw!less!./home.less');

@Component({
    selector: 'home',
    directives: [ArticlesGridComponent],
    styleUrls: [STYLES],
    template: `<articles-grid></articles-grid>`
})
export class Home {}
