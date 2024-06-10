import { EventEmitter, Injectable } from '@angular/core';

export interface Alert {
  type: 'success' | 'warning' | 'danger';
  message: string;
  title?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert$ = new EventEmitter<Alert>();

  constructor() {}

  setMessage(alert: Alert) {
    this.alert$.emit({
      type: alert.type,
      message: alert.message,
      title: alert.title,
    });
  }
}
