import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDanzestComponent } from './ngx-danzest.component';

describe('NgxDanzestComponent', () => {
  let component: NgxDanzestComponent;
  let fixture: ComponentFixture<NgxDanzestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDanzestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDanzestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
