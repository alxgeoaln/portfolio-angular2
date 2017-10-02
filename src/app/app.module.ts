import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ServicesComponent } from './component/services/services.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import {routes} from '../routes';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
// import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {} from '@angular/animations';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2PageTransitionModule} from 'ng2-page-transition';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    FooterComponent,
    MainComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    Ng2PageTransitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
