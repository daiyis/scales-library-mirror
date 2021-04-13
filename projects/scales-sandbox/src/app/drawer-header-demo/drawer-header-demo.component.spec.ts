import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerHeaderDemoComponent } from './drawer-header-demo.component';

describe('DrawerHeaderDemoComponent', () => {
  let component: DrawerHeaderDemoComponent;
  let fixture: ComponentFixture<DrawerHeaderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerHeaderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerHeaderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
