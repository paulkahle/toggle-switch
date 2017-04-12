import { CommonModule } from '@angular/common';
import { ToggleSwitchComponent } from './toggle-switch.component';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// export * from './toggle-switch.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ToggleSwitchComponent
    ],
    exports: [
        ToggleSwitchComponent
    ],
    entryComponents: [
        ToggleSwitchComponent
    ]
})
export class ToggleSwitchModule {

}
