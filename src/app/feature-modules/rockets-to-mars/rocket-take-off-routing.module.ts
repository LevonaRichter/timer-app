import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RocketTakeOffComponent } from "./components/rocket-take-off.component";

const routes: Routes = [
    {
      path: '',
      component: RocketTakeOffComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RocketTakeOffRoutingModule { }