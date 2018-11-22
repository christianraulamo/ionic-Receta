import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'edit', loadChildren: './edit-receta/edit-receta.module#EditRecetaPageModule' },
  { path: 'edit/:id', loadChildren: './edit-receta/edit-receta.module#EditRecetaPageModule' },
  { path: 'info', loadChildren: './info-receta/info-receta.module#InfoRecetaPageModule' },
  { path: 'info/:id', loadChildren: './info-receta/info-receta.module#InfoRecetaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
