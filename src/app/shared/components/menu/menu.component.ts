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
      url: '/home',
      icon: {
        name: 'home',
      },
    },
    {
      name: 'Gestão de UCs',
      url: '/ucs',
      icon: {
        name: 'building',
      },
    },
    {
      name: 'Gestão de ciclos',
      url: '/ciclos',
      icon: {
        name: 'calc',
      },
    },
    {
      name: 'Gestão de rateios',
      url: '/rateios',
      icon: {
        name: 'people',
      },
    },
    {
      name: 'Gestão de faturamento',
      url: '/faturamento',
      icon: {
        name: 'money',
      },
    },
    {
      name: 'Configurações',
      url: '/configuracoes',
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
