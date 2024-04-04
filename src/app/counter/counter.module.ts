import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        //para exportar el modulo
        CounterComponent
    ]
})


export class CounterModule {

}