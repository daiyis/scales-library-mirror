import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzHighlightComponent } from './highlight.component';
import { HighlightService } from './highlight.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NzHighlightComponent],
  exports: [NzHighlightComponent],
})
export class NzHighlightModule {}
