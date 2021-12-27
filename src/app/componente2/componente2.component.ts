import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit, OnChanges {

  @Input() number2:number = 0;
  show:boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // lo hice asi porque cuando el input estaba vacio la operacion ""%9 === 0 retornaba true :(
    if (this.number2.toString() == "") {
      this.show = false;
    } else {
      this.show = this.number2%9 === 0 ? true : false;
    }

  }

  ngOnInit(): void {
  }

}
