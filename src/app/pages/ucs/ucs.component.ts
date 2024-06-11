import { Component, OnInit } from '@angular/core';
import { ApiService, UC } from 'src/app/shared/services/api.service';

import {
  Alert,
  AlertService,
} from './../../shared/components/alert/alert.service';
import {
  Breadcrumbs,
  HeaderService,
} from './../../shared/components/header/header.service';

@Component({
  selector: 'app-ucs',
  templateUrl: './ucs.component.html',
  styleUrls: ['./ucs.component.scss'],
})
export class UcsComponent implements OnInit {
  totalUC?: number;
  status?: { actives: number; inactives: number };
  type?: {
    consumer: number;
    gerator: number;
  };
  group?: { groupA: number; groupB: number };
  invoicing?: {
    withAddress: number;
    noAddress: number;
    withCpfCnpj: number;
    noCpfCnpj: number;
  };

  alert?: Alert | undefined;

  ucs: UC[] = [];

  constructor(
    private headerService: HeaderService,
    private apiService: ApiService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const breadcrumbs: Breadcrumbs[] = [{ name: 'Gestão de UCs' }];
    this.headerService.setBreadcrumbs(breadcrumbs);

    this.totalUC = 245;

    this.status = { actives: 10, inactives: 0 };

    this.type = {
      consumer: 122,
      gerator: 30,
    };

    this.group = {
      groupA: 120,
      groupB: 200,
    };

    this.invoicing = {
      withAddress: 230,
      noAddress: 0,
      withCpfCnpj: 120,
      noCpfCnpj: 300,
    };

    this.apiService.getAll().subscribe({
      next: (ucs: any) => {
        this.ucs = ucs;
      },
    });
  }
}
