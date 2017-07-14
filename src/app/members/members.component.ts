import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router, private memberService: MemberService
  ) { }

  //All current users in Firebase
  ngOnInit() {
    this.users = this.memberService.getUsers();
  }

  //route navigation for dynamic routing
  goToProfile(user) {
    this.router.navigate(['members', user.$key])
  }

}
