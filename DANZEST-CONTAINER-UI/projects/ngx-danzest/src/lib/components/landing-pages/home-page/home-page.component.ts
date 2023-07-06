import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomePageService } from '../../../services/landing-pages-services/home-page-service/home-page.service';
import { Ihomepage } from '../../../models/landing-page-models/home-page.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  homeForm!: FormGroup;
  subscription!: Subscription;
  homeData: Ihomepage[] = [];

  constructor(
    private homePageService: HomePageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({
      title: [''],
      content: [''],
      imageUrl: [''],
    });
  }

  postHomePage(homeForm: FormGroup): void {
    console.log('homeForm.valid?', homeForm.valid);
    if (homeForm.valid) {
      this.subscription = this.homePageService
        .createHomePage(homeForm.value)
        .subscribe((result: Ihomepage) => {
          console.log('result', result);
          localStorage.setItem('homeStore', JSON.stringify(result));
          // this.router.navigate(['/dashboard'])
        });
    } else {
      console.log('Unable to post home page');
      alert('Unable to post home page');
    }
  }

  sum(n1: number, n2: number): number {
    let result = n1 + n2;
    return result;
  }

  ngOnDestroy(): void {
    if (!this.subscription) {
      return;
    } else {
      this.subscription.unsubscribe();
    }
  }
}
