import { TestBed } from '@angular/core/testing';

import { KakalUiService } from './kakal-ui.service';

describe('KakalUiService', () => {
  let service: KakalUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KakalUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
