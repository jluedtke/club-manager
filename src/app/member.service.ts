import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  users: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getUserById(memberId: string) {
  return this.database.object('members/' + memberId);
  }

  getUserByMatchedId(memberId: string) {
    return this.users.subscribe(user => {
      user.forEach(data => {
        if (data.$key === memberId) {
          console.log(data);
          return data;
        }
      });
    });
  }

}