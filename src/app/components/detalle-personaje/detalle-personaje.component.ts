import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html'
})
export class DetallePersonajeComponent implements OnInit {

  personaje: any = {};
  idioma: any;

  constructor(private _activatedRoute: ActivatedRoute, private _personajeService: PersonajesService) {
    this._activatedRoute.params.subscribe(params => {this.personaje = this._personajeService.getPersonaje(params['id']); } );
   }

  ngOnInit() {
  }

}
