import { Component, OnInit } from '@angular/core';
import { Breadcrumbs, HeaderService } from './header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  breadcrumbs!: Breadcrumbs[];

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.breadcrumbs$.subscribe(
      (breadcrumbs) => (this.breadcrumbs = breadcrumbs)
    );
  }
}
