import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EarnComponent } from './components/earn/earn.component';
import { FarmsContainerComponent } from './components/earn/farms/farms-container/farms-container.component';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageContainerComponent},
    {path: 'earn', component: EarnComponent,
        children:[
            {path:'farms', component:FarmsContainerComponent}
        ]},
    {path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
