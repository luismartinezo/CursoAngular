import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hc',
  templateUrl: './hc.component.html'
  // styleUrls: ['./hc.component.css']
})
export class HcComponent implements OnInit {
  name: string;

  constructor() { 
    this.name = 'Luis';
  }

  ngOnInit() {
  }

}
