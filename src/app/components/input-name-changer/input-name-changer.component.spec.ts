import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameChangerComponent } from './input-name-changer.component';

describe('InputNameChangerComponent', () => {
  let component: InputNameChangerComponent;
  let fixture: ComponentFixture<InputNameChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNameChangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNameChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
