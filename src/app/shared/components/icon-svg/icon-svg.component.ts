import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons } from 'src/app/shared/components/icon-svg/models/icons';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
})
export class IconSvgComponent {
  @Input() iconName: string = '';
  @Input() size?: string = '';

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
      money: Icons.money,
      building: Icons.building,
      calc: Icons.calc,
      people: Icons.people,
      house: Icons.house,
      upload: Icons.upload,
      config: Icons.config,
      download: Icons.download,
      edit: Icons.edit,
      filter: Icons.filter,
      trash: Icons.trash,
    };

    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(
      icons[this.iconName] || ''
    );
  }
}
