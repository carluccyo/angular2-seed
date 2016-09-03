import { Routes } from '@angular/router';
import { Pages } from './pages.component';
import { Ui } from './ui/ui.component';
import { Dashboard } from './dashboard/dashboard.component';
import { Buttons } from './ui/buttons/buttons.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }, {
                path: 'buttons',
                component: Buttons,
                data: {
                    menu: {
                        title: 'Buttons',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }
        ]
    }
];
