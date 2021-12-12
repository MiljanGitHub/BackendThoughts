import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArvatoComponent } from './components/blogs/arvato/arvato.component';
import { NgxGistRunkitModule } from 'ngx-gist-runkit';
import { RunKitEmbedComponent } from 'angular-runkit';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArvatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxGistRunkitModule
        
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }