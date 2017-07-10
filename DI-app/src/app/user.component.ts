// Importing required components.
import { Component, Injectable } from "@angular/core";
import { UserClass } from "./Model/user"
import { UserData } from "./Service/user.service"

// Component Decorator
@Component ({
    selector: "user-app",
    templateUrl: "./View/user.component.html"
})
export class UserComponent {
  // Binding logic.
  currentUser: UserClass = new UserClass();

  // User list array.
  userList: Array<UserClass> = new Array<UserClass>();

  constructor(private _userData: UserData) {
  }
  ngOnInit() {
      this.userList = this._userData.getUserData();
  }
 
  addUser() {
     this._userData.addUserData(this.currentUser);
     this.currentUser = new UserClass(); // Clear fields once user created.
  }
  
}