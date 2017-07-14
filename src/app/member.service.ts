import { Injectable } from '@angular/core';
import { Users } from './user.model';
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

}
