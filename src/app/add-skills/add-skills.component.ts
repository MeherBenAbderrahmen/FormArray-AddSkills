import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  skillsForm: FormGroup;
  submitted=false;
  constructor() {
    this.skillsForm=new FormGroup({
      name:new FormControl('', Validators.required),
      skills: new FormArray([],Validators.required)
    })

    this.addSkills();
   }
   get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
   newSkill(): FormGroup {
    return new FormGroup({
      skill: new FormControl('', Validators.required),
      exp: new FormControl('', Validators.required),
    })
  }
   addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
  clearSkills() {
    this.skills.clear();
  }
  ngOnInit(): void {
  }
  onSubmit() {
    
//console.log('Holaa==',this.skills.controls[0]?.get('skill')?.valid)
    this.submitted = true;
    if (this.skillsForm.valid) {
      console.log(this.skillsForm.value);

     // const registartions = JSON.parse(localStorage.getItem('registrations') || '[]');
      //console.log('olaaa=',this.skillsForm.get("name")?.value);
     // registartions.push(this.skillsForm.value)
      //registartions.splice(this.skillsForm.get("name")?.value, 1, this.skillsForm.value);
     // localStorage.setItem('registrations', JSON.stringify(registartions))
      this.skillsForm.reset();
    }
  }
}