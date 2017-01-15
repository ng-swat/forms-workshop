import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

interface User {
  username: string,
  email: string,
  password: string
}

@Component({
  selector: 'swat-model-driven-form',
  template: `
   <div class="container">
    <form [formGroup]="userForm"
          (ngSubmit)="submitHandler()">
      
      <div class="form-group">                           
        <input type="text"
               class="form-control"
               formControlName="username" 
               placeholder="username...">
      </div>
      
      <div class="form-group">
        <input type="text" 
               class="form-control"
               formControlName="email"
               placeholder="email...">
      </div>
              
      <div class="form-group">              
        <input type="password"   
               class="form-control"
               formControlName="password" 
               placeholder="password...">
      </div>
                                                                              
      <button class="btn btn-primary">Submit</button>                                    
    </form>         
    </div>
  `
})
export class ModelDrivenFormComponent {

  private userForm: FormGroup;
  private username: FormControl;
  private email   : FormControl;
  private password: FormControl;

  constructor() {
    this.username = new FormControl();
    this.email    = new FormControl();
    this.password = new FormControl();

    this.userForm = new FormGroup({
      username: this.username,
      email   : this.email,
      password: this.password
    })
  }

  private submitHandler() {
    console.log(this.userForm.value);
  }
}
