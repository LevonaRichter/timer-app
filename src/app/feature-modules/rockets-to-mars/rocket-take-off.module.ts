import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core-modules/core.module";
import { RocketTakeOffComponent } from "./components/rocket-take-off.component";
import { RocketTakeOffRoutingModule } from "./rocket-take-off-routing.module";

@NgModule({
    declarations: [
        RocketTakeOffComponent
    ],
    imports: [
        RocketTakeOffRoutingModule,
        CoreModule,
        CommonModule    
    ],
    providers: []
})

export class RocketTakeOffModule{
    constructor(){}
}