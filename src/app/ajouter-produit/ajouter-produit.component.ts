import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  submitted=false;
  profileForm=new FormGroup({
    nomProduit: new FormControl('',Validators.required),
    quantiteProduit: new FormControl('',[Validators.required]),
    categorieProduit: new FormControl('',[Validators.required]),
    dispoProduit: new FormControl('',[Validators.required])
   // email: new FormControl(''),
  })
  //this is a comment

  constructor(private router :Router)  {}

  ngOnInit(): void {
  }
  addProd(){
    this.submitted=true;
    if (this.profileForm.invalid)
    {return};
    console.log("ok");
     const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(registartions));
    this.router.navigate(['/listProduit'])

  }
}