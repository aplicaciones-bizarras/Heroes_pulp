import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajes: Personaje[] = [
    {
      nombre: 'La Sombra',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in erat vel metus vehicula viverra vitae at ligula. Nam ligula nibh, condimentum et gravida sed, facilisis ullamcorper urna. Duis lacinia, mi in varius rutrum, felis nisi egestas elit, at commodo felis ligula id risus. Quisque lobortis sed orci nec molestie. Duis pharetra, dui vel eleifend rutrum, mauris velit facilisis sapien, non pharetra orci libero sed est. Duis nec tempor nunc. Duis lacus urna, venenatis a interdum sit amet, ultrices semper eros. Aenean rutrum tincidunt gravida. Vivamus molestie arcu leo, sit amet blandit tellus gravida id.        Quisque et urna pretium, maximus diam ac, tempus nulla. Integer erat quam, fringilla ut est ac, commodo rutrum ipsum. Phasellus ac metus felis. Quisque molestie ante vitae mi semper, sed finibus nulla maximus. Aliquam tempus tristique elementum. Aliquam id consectetur enim, id semper tellus. Integer ac elit nec velit dictum elementum. Maecenas tempus risus vitae arcu blandit, nec commodo nulla ultrices. Morbi mollis pulvinar nisl, sed mollis leo semper ut. Etiam at ullamcorper tellus. Nulla commodo nibh et lorem aliquam, nec dictum diam semper. Aliquam suscipit mauris nec lacus faucibus, at posuere turpis accumsan. Donec sagittis, tortor vitae commodo iaculis, ipsum lorem gravida nisl, in pulvinar ante nunc at quam. Fusce non est ac lacus feugiat posuere. Pellentesque vitae tortor consequat, pretium velit non, consequat tellus. Quisque volutpat consectetur nulla et rhoncus. Ut eget nunc lorem. In non pellentesque dui, eget sollicitudin odio. Vivamus sit amet erat eleifend, egestas risus nec, fringilla lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc id ultricies erat, quis gravida sem. Etiam at cursus odio. Nullam lectus quam, pellentesque ac pulvinar vel, laoreet at ex. Proin tempor felis nec ultricies posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet placerat ligula. Morbi a dui ac justo pulvinar elementum a id lacus. Praesent vitae orci lacus. Curabitur sapien eros, blandit laoreet nisl non, interdum volutpat erat. Curabitur magna diam, faucibus et justo luctus, accumsan maximus erat. Vivamus sagittis euismod lectus non tempus. Nam lobortis magna vitae nibh rutrum, at vulputate est suscipit. Quisque in gravida libero, at fringilla sem. Nulla vehicula non erat eget sollicitudin. Nullam ut ipsum accumsan, vulputate felis id, dignissim nulla. Donec sed elit hendrerit, consequat arcu nec, euismod enim. Quisque faucibus orci in purus luctus auctor. Nullam et tincidunt sapien. Proin ut dolor consectetur, gravida est rutrum, ultricies velit. Mauris id mi at nisl blandit luctus. Quisque sed arcu non nibh malesuada sodales. ',
      img: 'src/assets/personajes/The_Shadow.jpg'
    },
    {
      nombre: 'The Spider',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in erat vel metus vehicula viverra vitae at ligula. Nam ligula nibh, condimentum et gravida sed, facilisis ullamcorper urna. Duis lacinia, mi in varius rutrum, felis nisi egestas elit, at commodo felis ligula id risus. Quisque lobortis sed orci nec molestie. Duis pharetra, dui vel eleifend rutrum, mauris velit facilisis sapien, non pharetra orci libero sed est. Duis nec tempor nunc. Duis lacus urna, venenatis a interdum sit amet, ultrices semper eros. Aenean rutrum tincidunt gravida. Vivamus molestie arcu leo, sit amet blandit tellus gravida id.        Quisque et urna pretium, maximus diam ac, tempus nulla. Integer erat quam, fringilla ut est ac, commodo rutrum ipsum. Phasellus ac metus felis. Quisque molestie ante vitae mi semper, sed finibus nulla maximus. Aliquam tempus tristique elementum. Aliquam id consectetur enim, id semper tellus. Integer ac elit nec velit dictum elementum. Maecenas tempus risus vitae arcu blandit, nec commodo nulla ultrices. Morbi mollis pulvinar nisl, sed mollis leo semper ut. Etiam at ullamcorper tellus. Nulla commodo nibh et lorem aliquam, nec dictum diam semper. Aliquam suscipit mauris nec lacus faucibus, at posuere turpis accumsan. Donec sagittis, tortor vitae commodo iaculis, ipsum lorem gravida nisl, in pulvinar ante nunc at quam. Fusce non est ac lacus feugiat posuere. Pellentesque vitae tortor consequat, pretium velit non, consequat tellus. Quisque volutpat consectetur nulla et rhoncus. Ut eget nunc lorem. In non pellentesque dui, eget sollicitudin odio. Vivamus sit amet erat eleifend, egestas risus nec, fringilla lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc id ultricies erat, quis gravida sem. Etiam at cursus odio. Nullam lectus quam, pellentesque ac pulvinar vel, laoreet at ex. Proin tempor felis nec ultricies posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet placerat ligula. Morbi a dui ac justo pulvinar elementum a id lacus. Praesent vitae orci lacus. Curabitur sapien eros, blandit laoreet nisl non, interdum volutpat erat. Curabitur magna diam, faucibus et justo luctus, accumsan maximus erat. Vivamus sagittis euismod lectus non tempus. Nam lobortis magna vitae nibh rutrum, at vulputate est suscipit. Quisque in gravida libero, at fringilla sem. Nulla vehicula non erat eget sollicitudin. Nullam ut ipsum accumsan, vulputate felis id, dignissim nulla. Donec sed elit hendrerit, consequat arcu nec, euismod enim. Quisque faucibus orci in purus luctus auctor. Nullam et tincidunt sapien. Proin ut dolor consectetur, gravida est rutrum, ultricies velit. Mauris id mi at nisl blandit luctus. Quisque sed arcu non nibh malesuada sodales. ',
      img: 'src/assets/personajes/The_Spider.jpg'
    },
  ];

  constructor() { }

  getPersonajes(): Personaje[] {
    return this.personajes;
}

getPersonaje(id: string) {
    return this.personajes[id];
}

buscarHeroe( termino: string) {
    const ARRAYPERSONAJES: Personaje[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.personajes.length; i ++) {

        const PERSONAJE = this.personajes[i];

        let nombre = PERSONAJE.nombre.toLowerCase();
        if ( nombre.indexOf( termino ) >= 0) {
          PERSONAJE.idx = i;
          ARRAYPERSONAJES.push( PERSONAJE );
        }
    }

    return ARRAYPERSONAJES;
}
}

export interface Personaje {
  nombre: string;
  bio: string;
  img: string;
  idx?: number;
}
