import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, FormArray, FormControl, Validators} from "@angular/forms";
import {SwatValidators} from "../validators/swat-validators";

interface User {
  username: string,
  email: string,
  password: string,
  address: Address,
  phones: string[]
}

interface Address {
  city: string,
  street: string,
  zip: string
}

@Component({
  selector: 'swat-form-validators',
  styles  : ['input.ng-invalid {border-color: red}'],
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
        <input type="password"   
               class="form-control"
               formControlName="matcher" 
               placeholder="repeat...">               
        <span *ngIf="userForm.invalid">Password must match!</span>        
      </div>
      
                 
      <div formGroupName="address" class="form-group">
          <input formControlName="city" 
                 class="form-control" 
                 type="text" 
                 placeholder="city...">
          <input formControlName="street" 
                 class="form-control" 
                 type="text" 
                 placeholder="street...">
          <input formControlName="zip" 
                 class="form-control"    
                 type="text" 
                 placeholder="zip...">
      </div>
      
      <div class="form-group" formArrayName="phones">
        <input *ngFor="let phone of userForm.get('phones').controls; let i=index"
               swatAutoFocus
               [formControlName]="i" 
               type="text">
         <button (click)="addPhone($event)" class="btn btn-sm btn-primary">+</button>
      </div>
                                                                                  
      <button type="submit" 
              class="btn btn-primary">Submit</button>                                    
    </form>         
    </div>
  `
})
export class FormValidators implements OnInit {

  private userForm: FormGroup;
  private builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      username: ['', SwatValidators.trim],
      email   : '',
      password: ['',Validators.required],
      matcher : '',
      address : this.builder.group({
        city  : '',
        street: '',
        zip   : ''
      }),
      phones  : this.builder.array([])
    },{
      validator: SwatValidators.passwordMatcher
    })
  }

  public addPhone(event) {
    event.preventDefault();
    const _phones: FormArray = <FormArray>this.userForm.get('phones');
    _phones.push(new FormControl());
  }

  private submitHandler() {
    console.log(this.userForm.value);
  }
}
