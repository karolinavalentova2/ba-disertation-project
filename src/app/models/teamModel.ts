import {UserModel} from "./userModel";
import {ProjectModel} from "./projectModel";

export interface TeamModel {
  id: string | number;
  author: UserModel;
  name: string;
  created: string;
  active: boolean;

  projects: ProjectModel[]
}
