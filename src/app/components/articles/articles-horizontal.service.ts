import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './articles-horizontal.mock';

@Injectable()
export class ArticlesHorizontalService {

    constructor() { }

    getArticles() {
        return Promise.resolve(ARTICLES);
    }

    getArticlesSlowly() {
        return new Promise<Article[]>(resolve =>
            setTimeout(() => resolve(ARTICLES), 2000) // 2 seconds
        );
    }

}
