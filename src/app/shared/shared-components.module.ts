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

@NgModule({
  declarations: [
    SidenavComponent,
    MenuComponent,
    IconSvgComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  exports: [
    SidenavComponent,
    MenuComponent,
    IconSvgComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  providers: [HeaderService],
})
export class SharedComponentsModule {}
