import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { StatusModalComponent } from 'src/app/shared/components/modal/status/status.component';
import { ApiService, UC } from 'src/app/shared/services/api.service';

import { Alert } from './../../shared/components/alert/alert.service';
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
  address?: {
    with: number;
    without: number;
  };
  cpfCnpj?: {
    with: number;
    without: number;
  };

  alert?: Alert | undefined;

  ucs: UC[] = [];

  constructor(
    private headerService: HeaderService,
    private apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    const breadcrumbs: Breadcrumbs[] = [{ name: 'Gestão de UCs' }];
    this.headerService.setBreadcrumbs(breadcrumbs);
    this.initializeUcs();
  }

  initializeUcs() {
    this.apiService.getAll().subscribe({
      next: (ucs: any) => {
        this.ucs = ucs;

        this.countUCs(ucs);
        this.countConsumersType(ucs);
        this.countGroups(ucs);
        this.countCpfCnpj(ucs);
        this.countStatus(ucs);
      },
    });
  }

  countUCs(ucs: UC[]) {
    this.totalUC = ucs.length;
  }

  countConsumersType(ucs: UC[]) {
    this.type = {
      consumer: 0,
      gerator: 0,
    };
    ucs.forEach((uc) => {
      if (this.type && uc.consumerType.id == 1) this.type.consumer++;
      if (this.type && uc.consumerType.id == 2) this.type.gerator++;
    });
  }

  countGroups(ucs: UC[]) {
    this.group = {
      groupA: 0,
      groupB: 0,
    };
    ucs.forEach((uc) => {
      if (this.group && [1, 2, 3, 4, 5, 6, 7].includes(uc.modality.id))
        this.group.groupA++;
      if (this.group && [8, 9, 10, 11, 12].includes(uc.modality.id))
        this.group.groupB++;
    });
  }

  countCpfCnpj(ucs: UC[]) {
    this.cpfCnpj = {
      with: 0,
      without: 0,
    };
    ucs.forEach((uc) => {
      if (this.cpfCnpj && uc.cpfCnpj) this.cpfCnpj.with++;
      if (this.cpfCnpj && !uc.cpfCnpj) this.cpfCnpj.without++;
    });
  }

  countStatus(ucs: UC[]) {
    this.status = {
      actives: 0,
      inactives: 0,
    };
    ucs.forEach((uc) => {
      if (this.status && uc.status == 'Ativo') this.status.actives++;
      if (this.status && uc.status == 'Inativo') this.status.inactives++;
    });
  }

  modal!: BsModalRef;
  openStatusModal(uc: UC) {
    const initialState: ModalOptions = {
      initialState: {
        uc: uc,
      },
    };
    this.modal = this.modalService.show(StatusModalComponent, initialState);

    this.modal.content.onHide.subscribe((result: boolean) => {
      if (result) this.modal.hide();
      this.initializeUcs();
    });
  }

  onDelete(ucId: number) {
    this.apiService.delete(ucId).subscribe(() => {
      this.initializeUcs();
    });
  }
}
