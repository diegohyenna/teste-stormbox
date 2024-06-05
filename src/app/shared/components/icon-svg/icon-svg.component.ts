import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons } from 'src/assets/icons';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
})
export class IconSvgComponent {
  @Input() iconName: string = '';

  svgContent: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadSVGIcon();
  }

  ngOnChanges(): void {
    this.loadSVGIcon();
  }

  private loadSVGIcon(): void {
    const icons: { [key: string]: string } = {
      home: Icons.home,
      menu: Icons.menu,
      settings: Icons.settings,
    };

    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(
      icons[this.iconName] || ''
    );
  }
}
