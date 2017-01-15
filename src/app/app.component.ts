import {Component} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray} from "@angular/forms";

export interface user {
  username: string,
  password: string,
  email: string,
  address: address,
  phones: number[]
}

export interface address {
  city: string,
  zip: number,
  street: string
}

@Component({
  selector: 'swat-root',
  template: `
    <h1 class="display-1">Forms Workshop</h1>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>
      <div class="form-group">
        <input type="text"
               formControlName="username"
               class="form-control" 
               placeholder="username">
      </div>
      
      <div class="form-group">
        <input type="password"
               formControlName="password"
               class="form-control" 
               placeholder="password">
      </div>
      
      <div class="form-group">
        <input type="text"
               formControlName="email"
               class="form-control" 
               placeholder="email">
      </div>
            
      <div class="form-group" formGroupName="address">
        <input type="text"
               formControlName="city"
               class="form-control" 
               placeholder="city">
               
        <input type="number"
               formControlName="zip"
               class="form-control" 
               placeholder="zip">
               
        <input type="text"
               formControlName="street"
               class="form-control" 
               placeholder="street">
               
      </div>
      
      <div class="form-group" formArrayName="phones">
          <input type="number"
                 swatAutoFocus
                 *ngFor="let phone of phones.controls; let i=index;"
                 [formControlName]="i">
          <button class="btn btn-sm btn-default"
                  type="button"
                 (click)="addPhone()">+</button>                 
      </div>
      
  
      <button type="submit" 
              class="btn btn-primary">submit</button>      
    </form>        
    `
})

export class AppComponent {

  private userForm: FormGroup;
  private address: FormGroup;
  private phones: FormArray;

  constructor(builder: FormBuilder) {

    this.phones = builder.array([
        new FormControl()
    ]);

    this.address = builder.group({
      city  : '',
      zip   : '',
      street: ''
    });

    this.userForm = builder.group({
      username: '',
      password: '',
      email   : '',
      address : this.address,
      phones  : this.phones
    });
  }

  private addPhone(){
    this.phones.push(new FormControl())
  }

  private onSubmit() {
    console.log(this.userForm.value);
  }
}
