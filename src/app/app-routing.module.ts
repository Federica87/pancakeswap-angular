import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PoolsContainerComponent } from './components/earn/pools/pools-container/pools-container.component';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageContainerComponent},
    {path:'pools', component: PoolsContainerComponent},
    {path: '**', redirectTo: 'home'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
