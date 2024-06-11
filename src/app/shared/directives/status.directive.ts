import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]',
})
export class StatusDirective {
  readonly CLASSES: any = {
    Ativo: 'Active',
    Inativo: 'Inactive',
  };

  @Input() status!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setClass(this.status);
  }

  setClass(status: string) {
    this.el?.nativeElement?.classList.remove();
    this.el?.nativeElement?.classList.add(this.CLASSES[status]);
    return;
  }

  ngOnChanges(changes: any): void {
    this.setClass(changes.status.currentValue);
  }
}
