import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //variables
  RegisterForm: FormGroup = new FormGroup({});
  fieldTextType: boolean = false;
  faEye = faEye
  faEyeSlash = faEyeSlash;
  doc_type_array: any[] = [];
  user: User 

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.user = new User();
  }

  ngOnInit(): void {
    this.doc_type_array = [
      "DNI",
      "CE"
    ];

    this.RegisterForm = this.fb.group({
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      doc_type: new FormControl(this.doc_type_array[0],  Validators.required),
      doc_number: new FormControl("", [Validators.required, Validators.minLength(7)]),
      email: new FormControl("",  [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })



  }

  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(){
    this.user.name = this.RegisterForm.get('name').value;
    this.user.lastname = this.RegisterForm.get('lastname').value;
    this.user.doc_type = this.RegisterForm.get('doc_type').value;
    this.user.doc_number = this.RegisterForm.get('doc_number').value;
    this.user.email = this.RegisterForm.get('email').value;
    this.user.password = this.RegisterForm.get('password').value;
    
    
    this.userService.register(this.user).subscribe(resp => {
      console.log(resp);
      
    })


  }

}
