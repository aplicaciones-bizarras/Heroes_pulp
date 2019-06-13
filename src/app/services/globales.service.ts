import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {

  idiomaSelecionado: string;

  constructor() { }

  setIdioma (idioma: string) {
    this.idiomaSelecionado = idioma;
  }

  getIdioma () {
    return this.idiomaSelecionado;
  }
}
