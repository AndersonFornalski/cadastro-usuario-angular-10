import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  user: User[];

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
      this.userService.getAllUsers()
        .subscribe( data => {
          this.user = data
          console.log(data);
        })
  }
}