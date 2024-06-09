import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUcsComponent } from './create-ucs.component';

describe('CreateUcsComponent', () => {
  let component: CreateUcsComponent;
  let fixture: ComponentFixture<CreateUcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUcsComponent]
    });
    fixture = TestBed.createComponent(CreateUcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
