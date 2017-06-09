import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GenericWebService } from './generic-web-service/generic.web.service';


import { WebService } from './web.service';
import {RouterModule} from "@angular/router";
import { SampleCoolGenComponent } from './sample-cool-gen/sample-cool-gen.component';
import { SampleDowCallComponent } from './sample-dow-call/sample-dow-call.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SampleCoolGenComponent,
    SampleDowCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes    
  ],
  providers: [WebService,GenericWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
