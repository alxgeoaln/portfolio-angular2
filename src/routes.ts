import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from 'app/component/main/main.component';


export const router: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: '**', component: MainComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
