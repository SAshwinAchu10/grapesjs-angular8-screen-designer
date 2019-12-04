import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolvejson',
  templateUrl: './resolvejson.component.html',
  styleUrls: ['./resolvejson.component.scss']
})
export class ResolvejsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const htmlJSON = JSON.parse(localStorage.getItem('gjs-components'));
    const cssJSON = JSON.parse(localStorage.getItem('gjs-styles'));
    console.log('htmlJSON ----  ', htmlJSON);
    console.log('cssJSON ----  ', cssJSON);
  }

}
