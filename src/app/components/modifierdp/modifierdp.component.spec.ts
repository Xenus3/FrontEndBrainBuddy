import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdpComponent } from './modifierdp.component';

describe('ModifierdpComponent', () => {
  let component: ModifierdpComponent;
  let fixture: ComponentFixture<ModifierdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierdpComponent]
    });
    fixture = TestBed.createComponent(ModifierdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
