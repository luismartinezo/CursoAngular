import { Component, OnInit, Input } from '@angular/core';
import { Configuracion } from '../models/configuracion';

@Component({
  selector: 'app-importExport',
  templateUrl: './importExport.component.html'
  // styleUrls: ['./importExport.component.css']
})
export class importExportComponent implements OnInit {
  public title = ' Master Angular';
  public descripcion: string;
  public fondo: string;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.fondo = Configuracion.fondo;

   }

  ngOnInit() {
  }

}
