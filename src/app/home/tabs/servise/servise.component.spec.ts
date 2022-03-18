import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiseComponent } from './servise.component';

describe('ServiseComponent', () => {
  let component: ServiseComponent;
  let fixture: ComponentFixture<ServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
