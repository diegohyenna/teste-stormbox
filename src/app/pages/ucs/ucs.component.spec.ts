import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcsComponent } from './ucs.component';

describe('UcsComponent', () => {
  let component: UcsComponent;
  let fixture: ComponentFixture<UcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcsComponent]
    });
    fixture = TestBed.createComponent(UcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
