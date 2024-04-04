import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        //para exportar el modulo
      HeroComponent,
      ListComponent
    ],
    imports: [
        CommonModule
    ]
})


export class HeroesModule {

}