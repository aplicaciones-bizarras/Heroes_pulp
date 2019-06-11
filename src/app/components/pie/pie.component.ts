import { Component } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent  {

  anio: number;
  version: string = version;

  constructor() {
    this.anio = new Date().getFullYear();
  }


}


