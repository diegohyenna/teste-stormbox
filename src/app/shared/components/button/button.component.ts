import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() title!: string;
  @Input() icon?: { size: string; name: string };
  @Input() type?: string;
  @Input() classes?: string;
  @Input() fontSize?: string;
  @Input() fontStyle?: string;

  ngOnChanges(changes: any): void {
    this.icon = changes?.icon?.currentValue;
  }
}
