import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoComponent } from './add-appo.component';

describe('AddAppoComponent', () => {
  let component: AddAppoComponent;
  let fixture: ComponentFixture<AddAppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
