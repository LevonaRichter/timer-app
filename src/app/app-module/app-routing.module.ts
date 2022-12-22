import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path:'',
      pathMatch: 'full',
      redirectTo: 'rocket_take_off'
  },
  {
    path: 'rocket_take_off',
    loadChildren: () => 
      import('../feature-modules/rockets-to-mars/rocket-take-off.module').then(m => m.RocketTakeOffModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
