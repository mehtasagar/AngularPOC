import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SampleCoolGenComponent } from './sample-cool-gen/sample-cool-gen.component';
import { SampleDowCallComponent } from './sample-dow-call/sample-dow-call.component';


export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sampleCoolgen', component: SampleCoolGenComponent },
  { path: 'sampleDow', component: SampleDowCallComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)