import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { User } from '../user.model';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  updateMember(user: User) {
    this.memberService.updateUser(user);
  }
}
