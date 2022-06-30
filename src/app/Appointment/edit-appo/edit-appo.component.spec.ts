import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppoComponent } from './edit-appo.component';

describe('EditAppoComponent', () => {
  let component: EditAppoComponent;
  let fixture: ComponentFixture<EditAppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
