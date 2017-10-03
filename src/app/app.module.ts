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
import {} from '@angular/animations';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';
import {ValidateService} from './services/validate.service';
import {EmailService} from './services/email.service';
import {ToastrService} from './services/toastr.service';


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
    ContactFormComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ValidateService, EmailService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
