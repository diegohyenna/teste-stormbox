import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared/shared-components.module';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'ucs',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'validityDate',
          keypath: 'validityDate',
          options: { unique: false },
        },
        {
          name: 'concessionaire',
          keypath: 'concessionaire',
          options: { unique: false },
        },

        { name: 'uf', keypath: 'uf', options: { unique: false } },
        {
          name: 'unityNumber',
          keypath: 'unityNumber',
          options: { unique: false },
        },
        {
          name: 'unityDescription',
          keypath: 'unityDescription',
          options: { unique: false },
        },
        {
          name: 'clientNumber',
          keypath: 'clientNumber',
          options: { unique: false },
        },
        { name: 'company', keypath: 'company', options: { unique: false } },
        {
          name: 'consumerType',
          keypath: 'consumerType',
          options: { unique: false },
        },
        { name: 'modality', keypath: 'modality', options: { unique: false } },
        { name: 'rural', keypath: 'rural', options: { unique: false } },
        {
          name: 'organizationType',
          keypath: 'organizationType',
          options: { unique: false },
        },
        {
          name: 'connectionType',
          keypath: 'connectionType',
          options: { unique: false },
        },
        { name: 'cpfCnpj', keypath: 'cpfCnpj', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
