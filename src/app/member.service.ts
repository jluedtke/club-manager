import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  users: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
    //Set FirebaseListObservables to this.users
    this.users = database.list('users');
  }

  //bootleg C# get
  getUsers() {
    return this.users;
  }

  //returns an observable that matches strings with Firebase
  //Couldn't get it to render, used Work-around
  //here just for referance
  getUserById(memberId: string) {
    return this.database.object('members/' + memberId);
  }


  //Adding new User. Origins from admin
  addUser(newUser: User) {
    this.users.push(newUser);
  }

}
