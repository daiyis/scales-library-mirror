import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-basic',
  template: `
    <button nz-button nzType="primary">Mark Complete</button>
    <button nz-button nzType="primary" nzLoading="true">Mark Complete</button>
    <button nz-button nzType="primary" disabled="true">Add Skills</button>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class NzDemoButtonBasicComponent {}
