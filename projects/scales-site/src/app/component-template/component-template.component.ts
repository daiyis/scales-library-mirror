import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../shared/highlight/highlight.service';

@Component({
  selector: 'app-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss'],
})
export class ComponentTemplateComponent implements OnInit {
  private highlighted: boolean = false;
  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {}

  // ngAfterViewChecked() {
  //   if (!this.highlighted) {
  //     // this.highlightService.highlightAll();
  //     this.highlighted = true;
  //   }
  // }
}
