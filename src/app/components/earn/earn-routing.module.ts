import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EarnComponent } from "./earn.component";
import { FarmsContainerComponent } from "./farms/farms-container/farms-container.component";
import { PoolsContainerComponent } from "./pools/pools-container/pools-container.component";

const routes: Routes= [
    {path:'earn',
     component:EarnComponent,
     children: [
        {path:'farms', component:FarmsContainerComponent},
        {path:'pools', component:PoolsContainerComponent}
     ]
    },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class EarnRoutingModule {}