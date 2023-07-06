import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-danzest',
  template: `
    <p>ngx-danzest works!</p>
    <lib-home-page></lib-home-page>
    <app-signup></app-signup>
  `,
  styles: [],
})
export class NgxDanzestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
