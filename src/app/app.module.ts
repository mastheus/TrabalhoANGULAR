import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { AnimacaoComponent } from './animacao/animacao.component';
import { ComediaromanticaComponent } from './comediaromantica/comediaromantica.component';
import { DramaComponent } from './drama/drama.component';
import { FiccienComponent } from './ficcien/ficcien.component';
import { HorrorComponent } from './horror/horror.component';
import { RomanceComponent } from './romance/romance.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { SuspenseComponent } from './suspense/suspense.component';


@NgModule({
  declarations: [
    AppComponent,
    AcaoComponent,
    AventuraComponent,
    AnimacaoComponent,
    ComediaromanticaComponent,
    DramaComponent,
    FiccienComponent,
    HorrorComponent,
    RomanceComponent,
    SuperheroComponent,
    SuspenseComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
