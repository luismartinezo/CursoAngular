import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//   @Input() name: string;
  @Input() user: User;
  edit: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private userService:UserService ) { 
    // this.name = 'Luis';
  }

  ngOnInit() {
    // const params = this.activatedRoute.snapshot.params;
    // console.log(params);
    // if (params.id) {
    //   this.userService.getUser()
          
    //         this.edit = true;
          
        
    // }
  }

  
}
