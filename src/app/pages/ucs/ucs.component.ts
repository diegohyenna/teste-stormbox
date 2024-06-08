import {
  Breadcrumbs,
  HeaderService,
} from './../../shared/components/header/header.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ucs',
  templateUrl: './ucs.component.html',
  styleUrls: ['./ucs.component.scss'],
})
export class UcsComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    const breadcrumbs: Breadcrumbs[] = [{ name: 'Gestão de UCs' }];
    this.headerService.setBreadcrumbs(breadcrumbs);
  }
}
