import { TestBed } from '@angular/core/testing';

import { CreatingPlayersService } from './creating-players.service';

describe('CreatingPlayersService', () => {
  let service: CreatingPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatingPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
