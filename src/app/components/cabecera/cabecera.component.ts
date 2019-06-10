import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent  {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
}

useLanguage(language: string) {
  this.translate.use(language);
}


}
