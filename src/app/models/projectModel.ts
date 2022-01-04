import {UserModel} from "./userModel";
import {TeamModel} from "./teamModel";

export interface ProjectModel {
  id: string | number;
  teams: TeamModel;
  author: UserModel;
  created: string;
  active: boolean;
  name: string;
}
