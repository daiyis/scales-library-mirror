import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from './nz-zorro.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { DrawerHeaderComponent } from './drawer-header/drawer-header.component';

@NgModule({
  declarations: [SearchComponent, DrawerHeaderComponent],
  imports: [NgZorroAntdModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [SearchComponent, DrawerHeaderComponent, NgZorroAntdModule],
})
export class ScalesLibraryModule {}
