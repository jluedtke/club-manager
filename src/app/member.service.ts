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
  getUserById(memberId: string) {
    return this.database.object('/users/' + memberId);
  }


  //Adding new User. Origins from admin
  addUser(newUser: User) {
    this.users.push(newUser);
  }

  //update entries in Firebase
  updateUser(localUpdatedUser) {
    var userEntryInFireBase = this.getUserById(localUpdatedUser.$key);

    console.log(userEntryInFireBase);
    userEntryInFireBase.update({
      name: localUpdatedUser.name,
      role: localUpdatedUser.role,
      tier: localUpdatedUser.tier,
      description: localUpdatedUser.description
    });
  }


}
