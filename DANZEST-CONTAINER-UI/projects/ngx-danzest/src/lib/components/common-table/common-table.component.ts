import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'lib-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Input() tableObject: any;
  public commonTableObject: any;

  constructor() { }

  ngOnInit(): void {
    this.commonTableObject = this.tableObject;
  }

}
