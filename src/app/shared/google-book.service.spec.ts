import { TestBed, inject } from '@angular/core/testing';

import { GoogleBookService } from './google-book.service';

describe('GoogleBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBookService]
    });
  });

  it('should be created', inject([GoogleBookService], (service: GoogleBookService) => {
    expect(service).toBeTruthy();
  }));
});
