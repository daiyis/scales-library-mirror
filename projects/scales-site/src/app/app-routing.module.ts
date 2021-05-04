import { ScInputDocComponent } from './input/sc-input-doc.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScButtonDocComponent } from './button/sc-button-doc.component';
import { ComponentTemplateComponent } from './component-template/component-template.component';

const routes: Routes = [
  { path: '', component: ComponentTemplateComponent },
  {
    path: 'input',
    component: ScInputDocComponent,
  },
  {
    path: 'button',
    component: ScButtonDocComponent,
  },
  // {
  //   path: 'table',
  //   component: TableDemoComponent,
  // },
  // {
  //   path: 'candidate',
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
