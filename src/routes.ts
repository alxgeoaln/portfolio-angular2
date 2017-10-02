import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from 'app/component/main/main.component';
import {ContactFormComponent} from './app/component/contact-form/contact-form.component';


export const router: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: '**', component: MainComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
