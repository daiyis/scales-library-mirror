import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ScalesLibraryComponent } from './scales-library.component';
import { NgZorroAntdModule } from './nz-zorro.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ScalesLibraryComponent, SearchComponent],
  imports: [NgZorroAntdModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [ScalesLibraryComponent, SearchComponent, NgZorroAntdModule],
})
export class ScalesLibraryModule {}
