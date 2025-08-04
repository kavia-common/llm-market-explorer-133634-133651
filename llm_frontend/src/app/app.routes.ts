import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/catalog/catalog.component').then(m => m.CatalogComponent),
    pathMatch: 'full'
  },
  {
    path: 'llms/:id',
    loadComponent: () => import('./screens/llm-detail-page/llm-detail-page.component').then(m => m.LlmDetailPageComponent)
  }
];
