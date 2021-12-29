import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit, OnChanges {

  @Input() number1:number = 0;

  show:boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  listenEvent(){
    this.change.emit(this.number1%5==0 ? true : this.number1%9 == 0 ? true : false)
  }
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.listenEvent()
  }

  ngOnInit(): void {
  }

}
