import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntactUsComponent } from './ontact-us.component';

describe('OntactUsComponent', () => {
  let component: OntactUsComponent;
  let fixture: ComponentFixture<OntactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
