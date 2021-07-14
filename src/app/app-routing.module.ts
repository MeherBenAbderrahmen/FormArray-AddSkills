import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { LoginComponent } from './login/login.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full',},
  {path: 'login', component: LoginComponent},
  {path: 'listProduit', component:ListeProduitComponent},
  {path: 'ajouterProduit', component:AjouterProduitComponent},
  {path: 'modifierProduit/:index', component:ModifierProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
