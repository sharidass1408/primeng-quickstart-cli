import { TestBed, inject } from '@angular/core/testing';

import { DvtoolService } from './dvtool.service';

describe('DvtoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DvtoolService]
    });
  });

  it('should be created', inject([DvtoolService], (service: DvtoolService) => {
    expect(service).toBeTruthy();
  }));
});
