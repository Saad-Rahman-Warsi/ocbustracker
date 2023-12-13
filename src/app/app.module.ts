import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';

import { HttpClient,HttpClientModule,HttpClientXsrfModule } from '@angular/common/http';
import { GetServiceService } from './get-service.service';
import { LandingComponent } from './landing/landing.component';
import { PostserviceService } from './postservice.service';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ViewComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
  ],
  
  providers: [GetServiceService,PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
