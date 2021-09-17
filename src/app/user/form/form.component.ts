import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from "../../models/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = new User;

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  save(){
    this.userService.createUser(this.user)
      .subscribe( data => {
        console.log(data);
        alert("cadastro salvo com sucesso")
        this.router.navigate(["lista"])
      })
  }
}
