import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { UcsComponent } from './ucs/ucs.component';
import { CreateUcsComponent } from './ucs/create-ucs/create-ucs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [UcsComponent, CreateUcsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class PagesModule {}
