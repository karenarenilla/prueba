import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { TallerComponent } from './taller/taller.component';
import { HabilidadComponent } from './habilidad/habilidad.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'persona', component: PersonaComponent },
  { path: 'taller', component: TallerComponent },
  { path: 'habilidad', component: HabilidadComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
