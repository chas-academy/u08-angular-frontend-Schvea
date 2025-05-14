import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./components/detail/detail.component').then(m => m.DetailComponent)
  }
];
