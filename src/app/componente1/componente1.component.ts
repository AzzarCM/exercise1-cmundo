import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit, OnChanges {

  @Input() number1:number = 0;

  show:boolean = false;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    // lo hice asi porque cuando el input estaba vacio la operacion ""%5 === 0 retornaba true :(
    if (this.number1.toString() == "") {
      this.show = false;
    } else {
      this.show = this.number1%5 === 0 ? true : false;
    }

    
    console.log(this.show);
  }

  ngOnInit(): void {
  }

}
