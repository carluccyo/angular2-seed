import { Routes } from '@angular/router';

import { About } from './about/about';
import { Home } from './home/home';
import { ItemListComponent } from './components/item-list/itemList.component';
import { RepoBrowser } from './github/repo-browser/repo-browser';
import { RepoList } from './github/repo-list/repo-list';
import { RepoDetail } from './github/repo-detail/repo-detail';


import { PagesRoutes } from './pages/pages.routes';
import { ArticlesRoutes } from './components/articles/articles.routes.ts'

export const rootRouterConfig : Routes = [
    ...PagesRoutes,
    ...ArticlesRoutes,
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'dashboard', redirectTo: '/pages/dashboard' },
    { path: 'home', component: Home },
    { path: 'items', component: ItemListComponent },
    { path: 'about', component: About },
    {
        path: 'github', component: RepoBrowser, children: [
            {
                path: ':org', component: RepoList, children: [
                    { path: ':repo', component: RepoDetail },
                    { path: '', component: RepoDetail }
                ]
            },
            { path: '', component: RepoList }
        ]
    }
];
