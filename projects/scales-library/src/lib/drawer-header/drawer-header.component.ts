import { Component, Input, OnInit, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sc-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerHeaderComponent implements OnInit {
  @Input() recordType = 'candidate' || 'contact' || 'company' || 'placement' || 'job' || 'application';
  @Input() recordIconType = '';
  @Input() avatarSrc = '';
  @Input() title = '';
  @Input() id = '';

  @ContentChild('infoLine') infoLineTemplate: TemplateRef<any> | null = null;
  @ContentChild('quickActions') quickActionsTemplate: TemplateRef<any> | null = null;
  @ContentChild('actionMenu') actionMenuTemplate: TemplateRef<any> | null = null;
  @ContentChild('tabMenu') tabMenuTemplate: TemplateRef<any> | null = null;

  ngOnInit() {}
}
