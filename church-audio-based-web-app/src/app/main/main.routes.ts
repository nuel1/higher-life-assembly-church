import { Route } from '@angular/router';
import { Home } from './home/home';
import { Main } from './main';
import { UploadSermon } from './upload-sermon/upload-sermon';

export const mainRoute: Route[] = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'upload-sermon',
        component: UploadSermon,
      },
    ],
  },
];
