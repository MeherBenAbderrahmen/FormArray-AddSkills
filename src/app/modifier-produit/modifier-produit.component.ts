import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  index: any;
  submitted=false;
  profileForm=new FormGroup({
    nomProduit: new FormControl('',Validators.required),
    quantiteProduit: new FormControl('',[Validators.required]),
    categorieProduit: new FormControl('',[Validators.required]),
    dispoProduit: new FormControl('',[Validators.required])
   
  })
  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm.patchValue(this.users[this.index])
  }
  update(){
    this.submitted=true;
    if (this.profileForm.invalid)
    {return};
    this.users.splice(this.index, 1, this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(this.users));
    this.router.navigateByUrl('/listProduit');
 
  }
}
