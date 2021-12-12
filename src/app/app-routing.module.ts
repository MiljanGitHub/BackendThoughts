import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArvatoComponent } from './components/blogs/arvato/arvato.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'soap-services', component: ArvatoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }