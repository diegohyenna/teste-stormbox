import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSvgComponent } from './components/icon-svg/icon-svg.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent, MenuComponent, IconSvgComponent],
  exports: [SidenavComponent, MenuComponent, IconSvgComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class SharedComponentsModule {}
