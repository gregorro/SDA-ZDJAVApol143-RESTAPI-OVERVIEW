import { Routes } from '@angular/router';
import { BasicInfoComponent } from './views/basic-info/basic-info.component';
import { DetailsComponent } from './views/details/details.component';
import { MainComponent } from './views/main/main.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: BasicInfoComponent
      },
      {
        path: ':id',
        component: DetailsComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
