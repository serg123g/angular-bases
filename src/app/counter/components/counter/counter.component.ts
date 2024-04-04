import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
<hr>
<p>
  Bienvenidos a Angular
  {{counter}}
</p>
<h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset(10)">Reset</button>
<button (click)="decreaseBy(1)">-1</button>

<hr>
    `
})

export class CounterComponent  {
    public title: string = 'Hola mundo';
    public counter: number = 10;
  
    increaseBy(value:number):void{
      this.counter += value
    }
  
    decreaseBy(value:number):void{
      this.counter -= value
    }
  
    reset(value:number):void{
      this.counter = value
    }
}