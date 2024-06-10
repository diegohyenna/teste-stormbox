import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

export interface UC {
  id: string;
  validityDate: string;
  concessionaire: {
    id: number;
    name: string;
  };
  uf: { id: number; name: string };
  unityNumber: string;
  unityDescription: string;
  clientNumber: string;
  company: string;
  consumerType: { id: number; name: string };
  modality: {
    id: number;
    name: string;
  };
  rural: {
    id: number;
    name: string;
  };
  organizationType: {
    id: number;
    name: string;
  };
  connectionType: {
    id: number;
    name: string;
  };
  cpfCnpj: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  store = 'ucs';
  constructor(private dbService: NgxIndexedDBService) {}

  getAll() {
    return this.dbService.getAll(this.store);
  }

  getById(ucId: number) {
    return this.dbService.getByID(this.store, ucId);
  }

  create(uc: UC) {
    return this.dbService.add(this.store, uc);
  }

  update(uc: UC) {
    return this.dbService.update(this.store, uc);
  }
}
