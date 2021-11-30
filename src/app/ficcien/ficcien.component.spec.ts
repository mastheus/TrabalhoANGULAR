import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccienComponent } from './ficcien.component';

describe('FiccienComponent', () => {
  let component: FiccienComponent;
  let fixture: ComponentFixture<FiccienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiccienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
