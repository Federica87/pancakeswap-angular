import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomepageComponentComponent } from './components/homepage/homepage-component/homepage-component.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:HomepageComponentComponent},
    {path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
