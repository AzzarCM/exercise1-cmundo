import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cristian Mundo App';
  number = 5;

  show:boolean = false;

  showComponent(value:any){
    this.show = value;
  }
  
}
