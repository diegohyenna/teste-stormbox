import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Breadcrumbs, HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private location: Location, private headerService:HeaderService) {}

  ngOnInit(): void {
    const breadcrumbs: Breadcrumbs[] = [{ name: 'Página não encontrada' }];
    this.headerService.setBreadcrumbs(breadcrumbs);
  }

  goBack() {
    this.location.back();
  }
}
