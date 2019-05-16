import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableOrder, NgxTableHeaders, NgxTableConfig, NgxTableFilter } from './types';
import DeepMerge from '../utils/DeepMerge';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss']
})
export class NgxTableComponent implements OnInit {

  /**
   * Data of the table. Array of content
   */
  data: any[];
  @Input('data')
  set setData(data: any[]) {
    this.data = data;
    if (this.data && this.data.length > 0 && !this.headers) {
      this.headers = this.getHeadersFromData(this.data);
    }
  }

  get getData(): any[] {
    return this.data;
  }

  @Input('headers')
  headers: NgxTableHeaders;

  /**
   * Config of the table
   */
  _configBK: NgxTableConfig = {
    order: {
      enable: false
    },
    filter: {
      enable: false,
      debounceTime: 200
    }
  };

  _config: NgxTableConfig;

  @Input('config')
  set config(conf: NgxTableConfig) {
    this._config = DeepMerge.deepmerge(this._configBK, conf);
  }

  get config(): NgxTableConfig {
    return this._config;
  }

  @Output('order')
  orderEmitter: EventEmitter<NgxTableOrder[]> = new EventEmitter<NgxTableOrder[]>();

  @Output('filter')
  filterEmitter: EventEmitter<NgxTableFilter[]> = new EventEmitter<NgxTableFilter[]>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(order: NgxTableOrder[]) {
    this.orderEmitter.emit(order);
  }

  onFilter(filter: NgxTableFilter[]) {
    this.filterEmitter.emit(filter);
  }

  private getHeadersFromData(data: any[]): NgxTableHeaders {
    return Object.keys(data[0]);
  }

}
