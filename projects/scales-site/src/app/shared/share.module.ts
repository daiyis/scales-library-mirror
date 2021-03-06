import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { NzAffixModule } from 'ng-zorro-antd/affix';
// import { NzAnchorModule } from 'ng-zorro-antd/anchor';
// import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzHighlightModule } from './highlight/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzHighlightModule,
    // NzToolTipModule,
    // NzAnchorModule,
    // NzAffixModule,
    // NzGridModule,
    // NzIconModule,
    // third libs
    DragDropModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzHighlightModule,
    // NzAnchorModule,
    // NzAffixModule,
    // NzGridModule,
    // NzToolTipModule,
    // NzIconModule,
    // third libs
    ScrollingModule,
    DragDropModule,
  ],
})
export class ShareModule {}
