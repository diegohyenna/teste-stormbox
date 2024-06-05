import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  name: string;
  url: string;
  icon: {
    name: string;
  };
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  faChevronCircleRight = faChevronRight;

  menuItems: MenuItem[] = [
    {
      name: 'Home',
      url: '/',
      icon: {
        name: 'home',
      },
    },
    {
      name: 'Gestão de UCs',
      url: '/ucs',
      icon: {
        name: 'menu',
      },
    },
    {
      name: 'Gestão de ciclos',
      url: '/ciclos',
      icon: {
        name: 'home',
      },
    },
    {
      name: 'Gestão de rateios',
      url: '/ucs',
      icon: {
        name: 'home',
      },
    },
    {
      name: 'Gestão de faturamento',
      url: '/ucs',
      icon: {
        name: 'home',
      },
    },
    {
      name: 'Configurações',
      url: '/a',
      icon: {
        name: 'settings',
      },
    },
  ];

  constructor(private router: Router) {}

  goToPage({ url }: MenuItem) {
    this.router.navigateByUrl(url);
  }
}
