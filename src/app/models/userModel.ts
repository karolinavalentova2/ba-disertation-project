export interface UserModel {
  id: string;
  email: string;
  password: string | null;
  verificationCode: string;
  imagePath: string;
  created: string;
  active: boolean;
  name: string;
}
