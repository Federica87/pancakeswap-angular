import { PoolsHistoryContainerComponent } from './components/earn/pools/pools-history-container/pools-history-container.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FarmsContainerComponent } from './components/earn/farms/farms-container/farms-container.component';
import { PoolsContainerComponent } from './components/earn/pools/pools-container/pools-container.component';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';
import { LimitContainerComponent } from './components/trade/limit/limit-container/limit-container.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageContainerComponent},
    {path:'farms', component:FarmsContainerComponent},
    {path:'pools', component: PoolsContainerComponent},
    {path: 'pools/history', component: PoolsHistoryContainerComponent},
    {path: 'limit', component: LimitContainerComponent },
    {path: '**', redirectTo: 'home'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
