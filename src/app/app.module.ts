import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaschainComponent } from './maschain/maschain.component';
import { RoschoutComponent } from './roschout/roschout.component';

@NgModule({
  declarations: [
    AppComponent,
    MaschainComponent,
    RoschoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
