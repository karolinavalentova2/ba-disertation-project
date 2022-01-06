import { Injectable } from '@angular/core';
import {UserModel} from "../../models/userModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * @description Returns the current logged-in user
   */
  public doReturnLoggedUser(): UserModel {
    return {
      id: "1",
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    }
  }
}
