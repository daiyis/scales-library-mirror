import { InputDemoComponent } from './input-demo/input-demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectDemoComponent } from './select-demo/select-demo.component';

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
  // {
  //   path: 'button',
  //   component: BuDemoComponent,
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
