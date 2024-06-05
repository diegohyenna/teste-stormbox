import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UcsComponent } from './ucs/ucs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ucs',
    pathMatch: 'full',
  },
  {
    path: 'ucs',
    component: UcsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
