import { RouterConfig } from '@angular/router';
import { ArticleDetailComponent } from './article.detail.component';

//noinspection TypeScriptValidateTypes
export const ArticlesRoutes: RouterConfig = [
    { path: 'article/:id', component: ArticleDetailComponent }
];
