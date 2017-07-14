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

  //HTML form submission, calls memberService to update in Firebase
  updateMember(user: User) {
    this.memberService.updateUser(user);
  }

  //HTML form submission, calls memberService to delete in Firebase
    deleteMember(user: User) {
    if (confirm("Are you sure you want to delete this user? Leaving is a capital punishment. This will unleash the drones.")) {
      this.memberService.deleteUser(user);
    }
  }
}
