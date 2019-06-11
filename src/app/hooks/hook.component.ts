import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';

@Component({
  
  selector: 'app-hook',
  // Podemos utilizar una plantilla o estilos en linea con comillas invertidas
  // template: `
  // <h1> Plantilla en Linea</h1>
  // `,
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, DoCheck, OnDestroy {
    // Primero se ejecuta el constructor y despues el onInit
   // Creamos el objeto
  
  // Area para las propiedades
  public titulo: string;
  public listado: string;
  mostrarVideoJuegos: boolean = true;
  constructor( ) { 
    // Aca podemos pasarle valores a las propiedades
    this.titulo = "Componente de Hook";
    this.listado = "Listado de los  Video Juego mas populares";

  }
  ngOnInit() {

    console.log('OnInit ejecuatado');
  }

  ngDoCheck() {

    console.log('DoCheck - Se realizo un cambio');
  }

  ngOnDestroy(){
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo(){
      this.titulo = "Nuevo Titulo del Componente";
  }
  

  ocultarVideoJuegos(value){
    this.mostrarVideoJuegos = value;
  }
}
