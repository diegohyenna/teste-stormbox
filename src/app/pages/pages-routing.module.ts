import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UcsComponent } from './ucs/ucs.component';
import { CreateUcsComponent } from './ucs/create-ucs/create-ucs.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ucs',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: UcsComponent,
  },
  {
    path: 'ucs',
    component: UcsComponent,
  },
  {
    path: 'ucs/create',
    component: CreateUcsComponent,
  },
  {
    path: 'ucs/edit/:ucId',
    component: CreateUcsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
