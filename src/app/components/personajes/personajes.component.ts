import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje } from '../../services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[];
  constructor(private _personajeService: PersonajesService, private _router: Router) { }

  ngOnInit() {
    // Inicialización del componente
    this.personajes = this._personajeService.getPersonajes();
  }

  detallePersonaje(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
