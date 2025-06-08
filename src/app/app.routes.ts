import { Route, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/profile/profile.component';
import { GaleriComponent } from './main/galeri/galeri.component';


export const homePath: Route[] = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch:'full'
  },
  {
    path: 'main/profile',
    component: ProfileComponent,
    pathMatch:'full'
  },
  {
    path: 'main/galeria',
    component: GaleriComponent,
    pathMatch:'full'
  }
];

export const routes: Routes = [
     ...homePath
];
