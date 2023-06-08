import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-example-lib',
  template: `
    <p>
      example-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ExampleLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
