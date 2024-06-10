import { Component, OnInit } from '@angular/core';
import { Alert, AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert?: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe({
      next: (alert: Alert) => {
        this.alert = alert;

        setTimeout(() => {
          this.alert = undefined;
        }, 5000);
      },
    });
  }

  onClosed(event: any) {
    console.log(event);
  }
}
