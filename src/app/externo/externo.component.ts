import { Component, OnInit, Input } from '@angular/core';
import { PeticionesService } from '../Services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html'
  // styleUrls: ['./externo.component.css']
})

export class ExternoComponent implements OnInit {

  public user: any;
  userId: number;
  fecha: any;
  constructor(private peticiones: PeticionesService ) {
    // this.name = 'Luis';
    this.userId = 1;
  }

  ngOnInit() {

    this.fecha = new Date();
    this.cargarUser();

    this.peticiones.getUser().subscribe(
      result => {
        this.user = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarUser() {

    this.peticiones.getUserId(this.userId).subscribe(
      result => {
        this.user = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
