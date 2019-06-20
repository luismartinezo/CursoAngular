import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
  // styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    edit: boolean = false;
    users: User[] = [];

  constructor(private UserService: UserService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
    // this.users = this.UserService.getUser();
    // this.edit = true;
    console.log(params);
  }

}
editUser(id:string){
    console.log(id);
  }
}
