import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnChanges {
  @Input() status!: string;

  ngOnChanges(changes: any): void {
    this.status = changes?.status?.currentValue;
  }
}
