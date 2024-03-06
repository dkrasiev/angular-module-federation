import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
