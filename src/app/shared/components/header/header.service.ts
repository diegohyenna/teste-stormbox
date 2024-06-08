import { EventEmitter, Injectable } from '@angular/core';

export interface Breadcrumbs {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class HeaderService {
  breadcrumbs$ = new EventEmitter<Breadcrumbs[]>();

  constructor() {}

  setBreadcrumbs(breadcrumbs: Breadcrumbs[]) {
    this.breadcrumbs$.emit(breadcrumbs);
  }
}
