import {User} from '../model/User'

import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;

export interface UserManager {
  createUser(id: string, pay: number): void
  getUser(id: string): User
  updateUser(user: User): void
  deleteUser(id: string): void
  login(authProvider: AuthProvider): void
  logout(): void
}
