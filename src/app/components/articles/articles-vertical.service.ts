import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Article } from './article.model';
import { ARTICLES } from './articles-vertical.mock';


@Injectable()
export class ArticlesVerticalService {

    constructor(private logger: Logger) { }

    getArticles() {
        return Promise.resolve(ARTICLES);
    }

    getArticlesSlowly() {
        return new Promise<Article[]>(resolve =>
            setTimeout(() => resolve(ARTICLES), 2000) // 2 seconds
        );
    }

}
