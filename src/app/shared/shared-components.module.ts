import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSvgComponent } from './components/icon-svg/icon-svg.component';

@NgModule({
  declarations: [SidenavComponent, MenuComponent, IconSvgComponent],
  exports: [SidenavComponent, MenuComponent, IconSvgComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedComponentsModule {}
