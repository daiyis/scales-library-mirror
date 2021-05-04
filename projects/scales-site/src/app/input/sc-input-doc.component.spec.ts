import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScInputDocComponent } from './sc-input-doc.component';

describe('ScInputDocComponent', () => {
  let component: ScInputDocComponent;
  let fixture: ComponentFixture<ScInputDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScInputDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScInputDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
