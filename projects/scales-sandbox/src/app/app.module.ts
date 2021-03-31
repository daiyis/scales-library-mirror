import { ScalesLibraryModule } from './../../../scales-library/src/lib/scales-library.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDemoComponent } from './select-demo/select-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { TableDemoComponent } from './table-demo/table-demo.component';

// import {ScalesLibraryModule} from 'dist/scales-library/scales-library';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, SelectDemoComponent, InputDemoComponent, TableDemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScalesLibraryModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
