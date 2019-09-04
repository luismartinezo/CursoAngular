import { Component, OnInit, Input } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { Menu } from '../../models/menu'

@Component({
  
  selector: 'app-videojuego',
  // Podemos utilizar una plantilla o estilos en linea con comillas invertidas
  // template: `
  // <h1> Plantilla en Linea</h1>
  // `,
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {
  // Creamos el objeto
  
  // Area para las propiedades
  public titulo: string;
  public listado: string;
  public color: string;
  public marca:string;

  constructor( public progress: NgProgress) { 
    // Aca podemos pasarle valores a las propiedades
    this.titulo = "Componente de Video Juego";
    this.listado = "Listado de los  Video Juego mas populares";
    this.color = 'blue';
    this.marcas =  new Array();
    this.mi_marca = 'fila';
    

  }

  ngOnInit() {}

  getMarca(){
    alert(this.mi_marca)
  }
}
