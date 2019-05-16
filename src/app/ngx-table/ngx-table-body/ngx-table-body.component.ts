import { Component, OnInit, Input } from '@angular/core';
import { NgxTableHeaders } from '../types';

@Component({
  selector: '[ngx-table-body]',
  templateUrl: './ngx-table-body.component.html',
  styleUrls: ['./ngx-table-body.component.scss']
})
export class NgxTableBodyComponent implements OnInit {

  @Input('data')
  data: any[] = [];

  @Input('headers')
  headers: NgxTableHeaders;

  constructor() { }

  ngOnInit() {
  }

}
