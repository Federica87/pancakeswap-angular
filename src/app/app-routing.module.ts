import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageContainerComponent},
    {path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
