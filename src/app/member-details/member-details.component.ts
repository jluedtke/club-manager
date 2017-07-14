import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  providers: [MemberService]
})
export class MemberDetailsComponent implements OnInit {
  memberId: string;
  memberToDisplay;
  users: FirebaseListObservable<any[]>;

  constructor(
    private router: ActivatedRoute,
    private memberService: MemberService,
    private location: Location
  ) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
     this.memberId = urlParameters['id'];
   });
   // This was a bust.
   this.users = this.memberService.getUsers();
   this.users.subscribe(user => {
     user.forEach(data => {
       if (data.$key === this.memberId) {
         console.log(data);
         this.memberToDisplay = data;
       }
     });
   });
  }

}