import { ApiService } from 'src/app/shared/services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSvgComponent } from './components/icon-svg/icon-svg.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderService } from './components/header/header.service';
import { CardsComponent } from './components/cards/cards.component';
import { AlertService } from './components/alert/alert.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { StatusDirective } from './directives/status.directive';
import { StatusComponent } from './components/status/status.component';
import { StatusModalComponent } from './components/modal/status/status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidenavComponent,
    MenuComponent,
    IconSvgComponent,
    HeaderComponent,
    ButtonComponent,
    CardsComponent,
    AlertComponent,
    StatusDirective,
    StatusComponent,
    StatusModalComponent,
  ],
  exports: [
    SidenavComponent,
    MenuComponent,
    IconSvgComponent,
    HeaderComponent,
    ButtonComponent,
    CardsComponent,
    AlertComponent,
    StatusDirective,
    StatusComponent,
    StatusModalComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    AlertModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HeaderService, ApiService, AlertService, BsModalService],
})
export class SharedComponentsModule {}
