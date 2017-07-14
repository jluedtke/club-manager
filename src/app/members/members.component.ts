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
  tierFilter: string = "Tier 1";

  constructor(
    private router: Router, private memberService: MemberService
  ) { }

  ngOnInit() {
    this.users = this.memberService.getUsers();
  }

  goToProfile(user) {
    this.router.navigate(['members', user.$key])
  }

}
