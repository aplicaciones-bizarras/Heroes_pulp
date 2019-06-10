import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent  {

  idiomaSeleccionado: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    this.idiomaSeleccionado = this.translate.defaultLang;
}

useLanguage(language: string) {
  this.translate.use(language);
  this.idiomaSeleccionado = this.translate.currentLang;
}

getLanguage() {
  return this.idiomaSeleccionado;
}


}
