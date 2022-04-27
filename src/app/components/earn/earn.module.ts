import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EarnComponent } from "./earn.component";
import { FarmsContainerComponent } from "./farms/farms-container/farms-container.component";
import { FarmsDataComponent } from './farms/farms-data/farms-data.component';
import { PoolsContainerComponent } from "./pools/pools-container/pools-container.component";

@NgModule({
    declarations: [
        EarnComponent,
        FarmsContainerComponent,
        FarmsDataComponent,
        PoolsContainerComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ]
})
export class EarnModule {}