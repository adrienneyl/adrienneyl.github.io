import { Routes } from '@angular/router';

// COMPONENT IMPORTS
import { Home } from './pages/home/home';
import { Archive } from './pages/archive/archive';
import { About } from './pages/about/about';
import { Set15 } from './pages/case-studies/set15/set15';
import { Set17 } from './pages/case-studies/set17/set17';
import { Set18 } from './pages/case-studies/set18/set18';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'archive',
    component: Archive,
  }
  ,
  {
    path: 'about',
    component: About,
  },
  {
    path: 'case-study/set15',
    component: Set15,
  },
    {
    path: 'case-study/set17',
    component: Set17,
  },
    {
    path: 'case-study/set18',
    component: Set18,
  }
];
