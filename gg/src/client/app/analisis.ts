import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'analisis',
  templateUrl: 'app/analisis.html',
  providers: [ContenidoService],
  pipes: []
})

export class Analisis implements OnInit{
  contenido: Contenido[] = [];

  constructor(private _router: Router, private _contentService: ContenidoService) {}

  ngOnInit(){
    this._contentService.getContenido().then(contenido =>{
      this.contenido = contenido;
    });
  }

  gotoDetail(contenido: Contenido) {
    let link = ['AnalisisDetalles', { id: contenido.id }];
    this._router.navigate(link);
  }
}
