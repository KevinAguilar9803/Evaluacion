import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
