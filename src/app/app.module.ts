import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep.service';
import { MarvelComponent } from './marvel/marvel.component';
import { MarvelService } from './marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    MarvelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CepService, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
