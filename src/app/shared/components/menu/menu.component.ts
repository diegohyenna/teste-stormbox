import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  name: string;
  url: string;
  image?: string;
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
      image: '',
    },
    {
      name: 'Gestão de UCs',
      url: '/ucs',
    },
    {
      name: 'Gestão de ciclos',
      url: '/ciclos',
    },
    {
      name: 'Gestão de rateios',
      url: '/ucs',
    },
    {
      name: 'Gestão de faturamento',
      url: '/ucs',
    },
    {
      name: 'Configurações',
      url: '/ucs',
    },
  ];

  constructor(private router: Router) {}

  goToPage({ url }: MenuItem) {
    this.router.navigateByUrl(url);
  }
}
