import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public nombre: string = 'Pedro'
    public edad: number = 12

    get capitalizedName():string{
      return this.nombre.toUpperCase()
    }
    
    getHeroDescription():string{
      return `${this.nombre} - ${this.edad}`
    }

    changeNombre():void {
      this.nombre = 'Spiderman'
    }

    changeEdad():void {
      this.edad = 33
    }

    resetForm():void {
      this.nombre = 'Pedro'
      this.edad = 12
      }
}
