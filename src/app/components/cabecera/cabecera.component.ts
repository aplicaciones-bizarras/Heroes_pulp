import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalesService } from '../../services/globales.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent  {

  constructor(private translate: TranslateService, private _globales: GlobalesService) {
    translate.setDefaultLang('es');
    this._globales.setIdioma(this.translate.defaultLang);
}

useLanguage(language: string) {
  this.translate.use(language);
  this._globales.setIdioma(this.translate.currentLang);
}


}
