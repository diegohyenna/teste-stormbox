import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';

import { Breadcrumbs, HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  breadcrumbs: Breadcrumbs[] | undefined;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    let breadcrumbs: any = localStorage.getItem('breadcrumbs') || undefined;
    if (breadcrumbs) {
      breadcrumbs = JSON.parse(breadcrumbs) as Breadcrumbs | undefined;
      this.breadcrumbs = breadcrumbs;
    }
  }
}
