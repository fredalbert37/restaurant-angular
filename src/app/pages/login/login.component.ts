import { UserService } from './../../services/user.service';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup = new FormGroup({})
  fieldTextType: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: new FormControl("",  [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(){
    
    const body = {
      email: this.LoginForm.get('email').value,
      password: this.LoginForm.get('password').value
    }
    
    this.userService.login(body).subscribe(resp => {
      console.log(resp);
    })


  }

}
