import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
  // styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    edit: boolean = false;
    users: User[] = [];
  constructor( private UserService: UserService, private activatedRoute:ActivatedRoute) { 
    // this.name = 'Luis';
  }

  ngOnInit() {
//     const params = this.activatedRoute.snapshot.params;
//     console.log(params);
//     if (params.id) {
//     this.users = this.UserService.getUser();
//     this.edit = true; 
//   }
  }

}
