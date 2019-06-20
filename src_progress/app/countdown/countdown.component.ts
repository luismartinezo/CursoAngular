import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init = null;
  public counter = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  private countdownTimeRef  = null;
  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }
  ngOnChanges(changes): void {
    console.log('Inicio valor actualizado a: ', changes.init.currentValue);
    this.startCountdown();
  }

  // Inicializa el contador
  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }
  // Cuenta atras
  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.counter = this.counter ;
      this.progressCount();
    }, 1000);
  }

  private clearTimeout() {
    if (this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
  }
  progressCount() {
    this.onDecrease.emit(this.counter);
    console.log('Count is ', this.counter);
    if (this.counter === 0) {
      this.onComplete.emit();
      console.log('Count end');
    } else {
      this.doCountdown();
    }
  }
}
