import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EarnComponent } from "./earn.component";
import { FarmsContainerComponent } from "./farms/farms-container/farms-container.component";
import { FarmsDataComponent } from './farms/farms-data/farms-data.component';
import { PoolsContainerComponent } from "./pools/pools-container/pools-container.component";
import { BtnSectionComponent } from './btn-section/btn-section.component';
import { PoolsCardComponent } from './pools/pools-card/pools-card.component';
import { LabelComponent } from './label/label.component';
import { FarmsCardComponent } from './farms/farms-card/farms-card.component';

@NgModule({
    declarations: [
        EarnComponent,
        FarmsContainerComponent,
        FarmsDataComponent,
        PoolsContainerComponent,
        BtnSectionComponent,
        PoolsCardComponent,
        LabelComponent,
        FarmsCardComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ]
})
export class EarnModule {}