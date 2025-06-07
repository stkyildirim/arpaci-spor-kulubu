import { Route, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


export const homePath: Route[] = [
  {
     path:'',
     component:MainComponent,
     pathMatch: 'full'
  }
]

export const routes: Routes = [
     ...homePath
];
