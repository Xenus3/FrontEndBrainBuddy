import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyTestComponent } from './monkey-test.component';

describe('MonkeyTestComponent', () => {
  let component: MonkeyTestComponent;
  let fixture: ComponentFixture<MonkeyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonkeyTestComponent]
    });
    fixture = TestBed.createComponent(MonkeyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
