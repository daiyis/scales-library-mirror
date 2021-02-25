import { TestBed } from '@angular/core/testing';

import { ScalesLibraryService } from './scales-library.service';

describe('ScalesLibraryService', () => {
  let service: ScalesLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScalesLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
