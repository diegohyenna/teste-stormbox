import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() title!: string;
  @Input() icon?: { size: string; name: string };

  ngOnChanges(changes: any): void {
    console.log(changes?.icon?.currentValue);
    this.icon = changes?.icon?.currentValue;
  }
}
