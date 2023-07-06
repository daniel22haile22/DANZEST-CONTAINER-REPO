import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';
import { HomePageService } from '../../../services/landing-pages-services/home-page-service/home-page.service';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageService: HomePageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [HomePageService], // Provide the HomePageService
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    homePageService = TestBed.inject(HomePageService); // Inject the HomePageService
    spyOn(homePageService, 'createHomePage'); // Spy on the createHomePage method
    fixture.detectChanges();
  });

  it('the sum of 2 and 2 is 4 ', () => {
    expect(component.sum(2, 2)).toBe(4)
  })

});
