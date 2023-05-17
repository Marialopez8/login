import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
signup:FormGroup;
  title = 'login';
  constructor(
    private _builder: FormBuilder
  ){
    this.signup=this._builder.group({
      email:['',Validators.compose([Validators.email,Validators.required])], 
      contrasena:['',Validators.required],
    })
  }
  enviar(values: any){
    console.log(values);
  }
} 
