import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss'],
})
export class SelectDemoComponent implements OnInit {
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];
  date = null;
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);


  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
  }
}
