import {UserManager} from "../manager/UserManager";
import AuthProvider = firebase.auth.AuthProvider;

export class UserManagerService implements UserManager {
  constructor()
  createUser(id: string, pay: number): void {
    console.log(`id: ${id}, pay: ${pay}`);
  }
}
