import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  //Take HTML form submisison. Call service method.
  submitForm(name: string, role: string, tier: string, description: string) {
    var newMember: User = new User(name, role, description, tier)
    this.memberService.addUser(newMember);
  }
}
