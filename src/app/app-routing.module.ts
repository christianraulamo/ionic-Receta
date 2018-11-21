import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'edit', loadChildren: './edit-receta/edit-receta.module#EditRecetaPageModule' },
  { path: 'edit/:id', loadChildren: './edit-receta/edit-receta.module#EditRecetaPageModule' },
  { path: 'info', loadChildren: './info-receta/info-receta.module#InfoRecetaPageModule' },
  { path: 'info/:id', loadChildren: './info-receta/info-receta.module#InfoRecetaPageModule' },
  { path: 'Pescado', loadChildren: './pescado/pescado.module#PescadoPageModule' },
  { path: 'Carne', loadChildren: './carne/carne.module#CarnePageModule' },
  { path: 'Salsas', loadChildren: './salsas/salsas.module#SalsasPageModule' },
  { path: 'Vegetales', loadChildren: './vegetales/vegetales.module#VegetalesPageModule' },
  { path: 'Aperitivos', loadChildren: './aperitivos/aperitivos.module#AperitivosPageModule' },
  { path: 'Aves', loadChildren: './aves/aves.module#AvesPageModule' },
  { path: 'Postres', loadChildren: './postres/postres.module#PostresPageModule' },
  { path: 'Sopa', loadChildren: './sopa/sopa.module#SopaPageModule' },
  { path: 'Bebida', loadChildren: './bebida/bebida.module#BebidaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
