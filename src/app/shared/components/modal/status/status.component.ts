import {
  AfterContentChecked,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModelClass } from 'src/app/shared/models/model.class';
import { Status } from 'src/app/shared/models/status';
import { ApiService, UC } from 'src/app/shared/services/api.service';

import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusModalComponent implements OnInit {
  @Output() onHide = new EventEmitter<boolean>();

  form: FormGroup = this.formBuilder.group({
    id: [''],
    status: ['', [Validators.required]],
  });

  formSubmitted = false;

  uc!: UC;

  status: any;
  statusChanged = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    let model = new ModelClass(Status);
    this.status = model.getAll();
    this.form.patchValue(this.uc);
  }

  confirm(): void {
    let data = this.form.value;
    data = { ...this.uc, id: data.id, status: data.status };
    this.formSubmitted = false;

    if (this.form.valid) {
      this.formSubmitted = true;
      this.apiService.update(data).subscribe({
        next: () => {
          this.alertService.setMessage({
            type: 'success',
            message: 'Salvo com sucesso!',
            title: 'Sucesso: ',
          });
          this.formSubmitted = true;
          this.onHide.emit(true);
        },
        error: () => {
          this.alertService.setMessage({
            type: 'danger',
            message: 'Não foi possível salvar os dados!',
            title: 'Erro: ',
          });
          this.formSubmitted = true;
          this.onHide.emit(true);
        },
      });
    } else {
      this.formSubmitted = true;
      this.alertService.setMessage({
        type: 'warning',
        message: 'O formulário contem dados inválidos!',
        title: 'Alerta: ',
      });
    }
  }

  decline(): void {
    this.onHide.emit(true);
  }
}
