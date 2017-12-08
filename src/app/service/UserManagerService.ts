import {UserManager} from "../manager/UserManager";
import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;
import {User} from "../model/User";


export class UserManagerService implements UserManager {

  createUser(id: string, pay: number): void {
    console.log(`id: ${id}, pay: ${pay}`);
  }

  getUser(id: string): User {
    throw new Error("Method not implemented.");
  }

  updateUser(user: User): void {
    throw new Error("Method not implemented.");
  }

  deleteUser(id: string): void {
    throw new Error("Method not implemented.");
  }

  login(authProvider: AuthProvider): void {
    throw new Error("Method not implemented.");
  }

  logout(): void {
    throw new Error("Method not implemented.");
  }


}
