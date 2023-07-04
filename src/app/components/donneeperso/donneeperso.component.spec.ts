import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneepersoComponent } from './donneeperso.component';

describe('DonneepersoComponent', () => {
  let component: DonneepersoComponent;
  let fixture: ComponentFixture<DonneepersoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonneepersoComponent]
    });
    fixture = TestBed.createComponent(DonneepersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
