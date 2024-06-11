import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]',
})
export class StatusDirective {
  readonly CLASSES: any = {
    ativo: 'Active',
    inativo: 'Inactive',
  };

  @Input() status!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setClass(this.status);
  }

  setClass(status: string) {
    if (status) {
      status = status.toLowerCase();
      let classe = this.CLASSES[status];
      this.el?.nativeElement?.classList.remove();
      this.el?.nativeElement?.classList.add(classe);
    }
    return;
  }

  ngOnChanges(changes: any): void {
    this.setClass(changes.status.currentValue);
  }
}
