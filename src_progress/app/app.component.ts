import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CursoAngular';
  formulario: FormGroup;
  // progress-bar
  counterProgress = 0;
  totalCountdown = 10;
  ngOnInit() {

    this.formulario = new FormGroup({
      nombre: new FormControl(null),
      email:  new FormControl(null)
    });
  }
  updateProgress($event) {
    this.counterProgress = (this.totalCountdown - $event) / this.totalCountdown * 100;
  }

  countdownFinished() {
    console.log('Contador ha finalizado');
  }
}
