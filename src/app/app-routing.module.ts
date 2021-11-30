import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './acao/acao.component';
import { AnimacaoComponent } from './animacao/animacao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { ComediaromanticaComponent } from './comediaromantica/comediaromantica.component';
import { DramaComponent } from './drama/drama.component';
import { FiccienComponent } from './ficcien/ficcien.component';
import { HomeComponent } from './home/home.component';
import { HorrorComponent } from './horror/horror.component';
import { RomanceComponent } from './romance/romance.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { SuspenseComponent } from './suspense/suspense.component';

const routes: Routes = [{
  path: 'acao',
  component: AcaoComponent,
},
{
  path: 'aventura',
  component: AventuraComponent,
},
{
  path: 'animacao',
  component: AnimacaoComponent,
},
{
  path: 'comediaromantica',
  component: ComediaromanticaComponent,
},
{
  path: 'drama',
  component: DramaComponent,
},
{
  path: 'ficcien',
  component: FiccienComponent,
},{
  path: 'horror',
  component: HorrorComponent,
},
{
  path: 'romance',
  component: RomanceComponent,
},
{
  path: 'superhero',
  component: SuperheroComponent,
},
{
  path: 'suspense',
  component: SuspenseComponent,
},
{
  path: 'home',
  component: HomeComponent,
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
