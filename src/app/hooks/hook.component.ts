import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';
import { UserService } from '../Services/user.service';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../models/user';

import 'rxjs/add/operator/map';

class Person {
  id: number;
  nombre: string;
  lastName: string;
}

class DataTablesResponse {
  // progress-bar
  counterProgress = 0;
  totalCountdown = 10;
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

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
// progress-bar
counterProgress = 0;
totalCountdown = 10;
    // Primero se ejecuta el constructor y despues el onInit
   // Creamos el objeto
   dtOptions: DataTables.Settings = {};
   persons: Person[];
   usuarios: User[];
   userSelected: number;
   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Person> = new Subject();
  // Area para las propiedades
  public titulo: string;
  public listado: string;
  mostrarVideoJuegos = true;
  displayedColumns = ['Id', 'Nombre', 'Apellido', 'Nacionalidad', 'Edad'];
  dataSource: any;
  textoModificado: string;
  constructor( private dataService: UserService, private http: HttpClient) {
    // Aca podemos pasarle valores a las propiedades
    this.titulo = 'Componente de Hook';
    this.listado = 'Listado de los  Video Juego mas populares';

  }
  ngOnInit(): void {
    // Prueba de select
    this.usuarios = [
      {id: 1, nombre: 'Luis', apellido: 'Martinez', nacionalidad: 'Colombia', edad: 20},
      {id: 2, nombre: 'Carlos', apellido: 'Montaño', nacionalidad: 'Maxico', edad: 30},
      {id: 3, nombre: 'Edison', apellido: 'Bejarano', nacionalidad: 'India', edad: 40}
    ];
    this.userSelected = 2;
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'nombre' }, { data: 'lastName' }]
    };

    // llamamos el metodo getUser que creamos abajo
    // this.getUser();
    console.log('OnInit ejecuatado');
  }
//   getUser() {
//     this.dataService.getUser()
//         .subscribe(
//               x => console.log(`Observer tiene una respuesta del web Api: ${JSON.stringify(x)}`),
//               err => console.error('Observer tiene un error: ' + err.message),
//               () => console.log('Observer tiene una notificación completa')
//         );
//  }
  ngDoCheck() {

    console.log('DoCheck - Se realizo un cambio');
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
      this.titulo = 'Nuevo Titulo del Componente';
  }

  ocultarVideoJuegos(value) {
    this.mostrarVideoJuegos = value;
  }
  updateProgress($event) {
    this.counterProgress = (this.totalCountdown - $event) / this.totalCountdown * 100;
  }

  countdownFinished() {
    console.log('Contador ha finalizado');
  }
  onUsuarioSeleccionado(val: any) {
    // web Api
    this.customFunction(val);
  }

  customFunction(val: any) {
    this.textoModificado = 'El valor ' + val + ' seleccionado desde la lista';
  }
}
