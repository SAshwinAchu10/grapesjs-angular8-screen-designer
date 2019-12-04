import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Testpage1Component } from './testpage1/testpage1.component';
import { EditorComponent } from './editor/editor.component';
import { ResolvejsonComponent } from './resolvejson/resolvejson.component';

@NgModule({
  declarations: [
    AppComponent,
    Testpage1Component,
    EditorComponent,
    ResolvejsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
