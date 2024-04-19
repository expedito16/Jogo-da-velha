import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingPlayersComponent } from './creating-players.component';

describe('CreatingPlayersComponent', () => {
  let component: CreatingPlayersComponent;
  let fixture: ComponentFixture<CreatingPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatingPlayersComponent]
    });
    fixture = TestBed.createComponent(CreatingPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
