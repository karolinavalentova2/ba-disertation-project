export interface UserModel {
  id: string | number;
  name: string;
  email: string;
  password: string;
  verificationCode: string;
  imagePath: string;
  created: string;
  active: boolean;
}
