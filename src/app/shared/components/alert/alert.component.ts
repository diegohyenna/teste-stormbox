import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Alert, AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnChanges {
  @Input() alert?: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe({
      next: (alert: Alert) => {
        this.alert = alert;
        console.log(this.alert);
        // setTimeout(() => {
        //   this.alert = undefined;
        // }, 5000);
      },
    });
  }

  ngOnChanges(changes: any): void {
    console.log(this.alert);
    console.log(changes);
  }

  onClosed(event: any) {
    console.log(event);
  }
}
