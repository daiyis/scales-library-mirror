import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.scss']
})
export class SwitchDemoComponent implements OnInit {

  switchValue = false;
  disabled = false;

  ngOnInit(): void {
  }

}
