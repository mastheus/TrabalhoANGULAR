import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediaromanticaComponent } from './comediaromantica.component';

describe('ComediaromanticaComponent', () => {
  let component: ComediaromanticaComponent;
  let fixture: ComponentFixture<ComediaromanticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComediaromanticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComediaromanticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
