import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesLibraryComponent } from './scales-library.component';

describe('ScalesLibraryComponent', () => {
  let component: ScalesLibraryComponent;
  let fixture: ComponentFixture<ScalesLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScalesLibraryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
