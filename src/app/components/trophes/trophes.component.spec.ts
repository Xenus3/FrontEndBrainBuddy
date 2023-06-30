import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophesComponent } from './trophes.component';

describe('TrophesComponent', () => {
  let component: TrophesComponent;
  let fixture: ComponentFixture<TrophesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrophesComponent]
    });
    fixture = TestBed.createComponent(TrophesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
