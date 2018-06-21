import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PluginsModule } from './/plugins.module';
import { HomeComponent } from './home/home.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginsModule,
    HttpClientModule
  ],
  entryComponents: [
    DynamicPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
