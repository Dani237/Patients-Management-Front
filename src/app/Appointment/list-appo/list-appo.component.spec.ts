import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppoComponent } from './list-appo.component';

describe('ListAppoComponent', () => {
  let component: ListAppoComponent;
  let fixture: ComponentFixture<ListAppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
