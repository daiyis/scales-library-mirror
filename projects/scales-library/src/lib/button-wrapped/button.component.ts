import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NzButtonType } from 'ng-zorro-antd/button';

// test the wrapped way
@Component({
  selector: 'sc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() scType: NzButtonType = 'default';
  @Input() text = '';
  @Input() scDanger: boolean = false;

  ngOnInit() {}

  ngOnDestroy() {}
}
