import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EarnComponent } from './components/earn/earn.component';
import { FarmsContainerComponent } from './components/earn/farms/farms-container/farms-container.component';
import { PoolsContainerComponent } from './components/earn/pools/pools-container/pools-container.component';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';
import { LimitContainerComponent } from './components/trade/limit/limit-container/limit-container.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageContainerComponent},
    {path: 'earn', component: EarnComponent,
        children:[
            {path:'farms', component:FarmsContainerComponent},
            {path:'pools', component: PoolsContainerComponent},
        ]},
    { path: 'limit', component: LimitContainerComponent },
    {path: '**', redirectTo: 'home'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
