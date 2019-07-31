import {Component} from '@angular/core';

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
  styleUrls: ['select-form-example.css'],
})
export class SelectFormExample {
  selectedValue: string;

  clients = [
    { id : 'id1', clientName: 'Bruce'},
    { id : 'id2', clientName: 'Ben'},
    { id : 'id3', clientName: 'Peter'}
  ];

  changeClient(data){
    alert("selected --->"+data);
  }

  changeClient2(data){
    alert("selected --->"+this.clients[data].id+' '+this.clients[data].clientName);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */