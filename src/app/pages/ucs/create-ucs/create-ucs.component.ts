import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Concessionaire } from 'src/app/shared/models/concessionaires';
import { ConnectionType } from 'src/app/shared/models/connection-type';
import { ConsumerType } from 'src/app/shared/models/consumer-type';
import { Modality } from 'src/app/shared/models/modality';
import { ModelClass } from 'src/app/shared/models/model.class';
import { OrganizationType } from 'src/app/shared/models/organization-type';
import { Rural } from 'src/app/shared/models/rural';
import { UF } from 'src/app/shared/models/ufs';

@Component({
  selector: 'app-create-ucs',
  templateUrl: './create-ucs.component.html',
  styleUrls: ['./create-ucs.component.scss'],
})
export class CreateUcsComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword = false;

  form: FormGroup = this.formBuilder.group({
    validityDate: ['', [Validators.required]],
    concessionaire: this.formBuilder.group({
      id: ['', [Validators.required]],
    }),
    uf: this.formBuilder.group({
      id: ['', [Validators.required]],
    }),
    unityNumber: ['', [Validators.required]],
    unityDescription: ['', [Validators.required]],
    clientNumber: [''],
    company: ['', [Validators.required]],
    consumerType: this.formBuilder.group({
      id: ['', [Validators.required]],
    }),
    modality: this.formBuilder.group({
      id: ['', [Validators.required]],
    }),
    rural: this.formBuilder.group({
      id: ['', [Validators.required]],
    }),
    organizationType: this.formBuilder.group({
      id: [''],
    }),
    connectionType: this.formBuilder.group({
      id: [''],
    }),
    cpfCnpj: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  formSubmitted = false;

  concessionaires: any;
  concessionaireChanged = '';

  ufs: any;
  ufsChanged = '';

  consumersType: any;
  consumerTypeChanged = '';

  modalities: any;
  modalityChanged = '';

  rural: any;
  ruralChanged = '';

  organizationsType: any;
  organizationTypeChanged = '';

  connectionsType: any;
  connectionTypeChanged = '';

  constructor(private location: Location, private formBuilder: FormBuilder) {
    let model = new ModelClass(Concessionaire);
    this.concessionaires = model.getAll();

    model = new ModelClass(UF);
    this.ufs = model.getAll();

    model = new ModelClass(ConsumerType);
    this.consumersType = model.getAll();

    model = new ModelClass(Modality);
    this.modalities = model.getAll();

    model = new ModelClass(Rural);
    this.rural = model.getAll();

    model = new ModelClass(OrganizationType);
    this.organizationsType = model.getAll();

    model = new ModelClass(ConnectionType);
    this.connectionsType = model.getAll();
  }

  save() {
    const data = this.form.value;

    this.formSubmitted = false;

    console.log(data);
    console.log(this.form);

    if (this.form.valid) {
      this.formSubmitted = true;
      // this.usersService.createUser(data).subscribe({
      //   next: (res) => {
      //     this.toastr.getToastrs(
      //       "success",
      //       "Cadastro de usuários salvo com sucesso!"
      //     );
      //     this.formSubmitted = true;
      //     this.router.navigate(["/configuracoes/usuarios"]);
      //   },
      //   error: () => {
      //     this.toastr.getToastrs(
      //       "danger",
      //       "Não foi possível salvar as informações!"
      //     );
      //     this.formSubmitted = true;
      //   },
      // });
    } else {
      this.formSubmitted = true;
      // this.toastr.getToastrs(
      //   "warning",
      //   "Os campos apresentam erros! Corrija-os"
      // );
    }
  }

  changeSelected(attr: string, selected: any) {
    this.form.get(attr)?.patchValue({ id: selected[0] });
  }

  showHidePassword(show: boolean) {
    this.showPassword = show;
  }

  goBack() {
    this.location.back();
  }
}
