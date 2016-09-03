import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './article.detail.component';


export const ArticlesRoutes: Routes = [
    { path: 'article/:id', component: ArticleDetailComponent }
];
