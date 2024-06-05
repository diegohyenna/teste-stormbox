import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SidenavComponent, MenuComponent],
  exports: [SidenavComponent, MenuComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedComponentsModule {}
