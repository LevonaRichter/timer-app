import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TimerComponent } from "./timer/components/timer.component";

@NgModule({
    declarations: [TimerComponent],
    imports: [    
        CommonModule 
    ],
    exports: [TimerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class CoreModule { }
  