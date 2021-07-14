import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { PcntVentePipe } from './pipes/pcnt-vente.pipe';
import { LoginComponent } from './login/login.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent,
    ListeProduitComponent,
    ModifierProduitComponent,
    SearchPipe,
    PcntVentePipe,
    LoginComponent,
    AddSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
