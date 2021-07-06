import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor() { }

  ngOnInit(): void {
  }
  supprimerElement(nb: any){
    this.users.splice(nb,1);
    localStorage.setItem('registration', JSON.stringify(this.users));
  }
}
