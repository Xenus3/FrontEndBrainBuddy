import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyTestTutorielComponent } from './monkey-test-tutoriel.component';

describe('MonkeyTestTutorielComponent', () => {
  let component: MonkeyTestTutorielComponent;
  let fixture: ComponentFixture<MonkeyTestTutorielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonkeyTestTutorielComponent]
    });
    fixture = TestBed.createComponent(MonkeyTestTutorielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
