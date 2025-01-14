import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  FRegistro!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('/^[A-Z].{8}[0-9]$/)')]],
      passwordConfirm: ['', [Validators.required]],
      date: ['', [Validators.required],Validators.max(Number(new Date()))]
    },{Validators:this.comprobarIgualPassword});
  }
  comprobarIgualPassword(group: FormGroup) {

    return group.get('passwordConfirm')?.value === group.get('password')?.value ? null : { comprobarIgualPassword: true };

  }
}
