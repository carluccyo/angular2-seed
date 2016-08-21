import {RouterConfig} from '@angular/router';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Dashboard} from './dashboard/dashboard.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
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
      }
    ]
  }
];
