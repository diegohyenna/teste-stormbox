import { EventEmitter, Injectable } from '@angular/core';

export interface Breadcrumbs {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class HeaderService {
  breadcrumbs$ = new EventEmitter<boolean>();

  constructor() {}

  setBreadcrumbs(breadcrumbs: Breadcrumbs[]) {
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
    this.breadcrumbs$.emit(true);
  }
}
