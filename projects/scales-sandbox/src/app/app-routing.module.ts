import { InputDemoComponent } from './input-demo/input-demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectDemoComponent } from './select-demo/select-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { DrawerHeaderDemoComponent } from './drawer-header-demo/drawer-header-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  {
    path: 'select',
    component: SelectDemoComponent,
  },
  {
    path: 'input',
    component: InputDemoComponent,
  },
  {
    path: 'table',
    component: TableDemoComponent,
  },
  {
    path: 'drawer-header',
    component: DrawerHeaderDemoComponent,
  },
  {
    path: 'switch',
    component: SwitchDemoComponent,
  },
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
