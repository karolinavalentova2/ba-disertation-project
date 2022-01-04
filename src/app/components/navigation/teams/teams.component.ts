import {Component, OnDestroy, OnInit} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {Router} from "@angular/router";
import {Subscriber, Subscription} from "rxjs";
import {TeamModel} from "../../../models/teamModel";
import {TeamsService} from "../../../services/component/teams.service";


interface ClickableMenuNode {
  name: string;
  projectId: number;
  route: string;
}
interface TeamMenuNode {
  name: string;
  children?: ClickableMenuNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {

  private _transformer = (node: TeamMenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  private teamsSubscriber!: Subscription;
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router, private teamsService: TeamsService) {
    // this.dataSource.data = TREE_DATA;
  }

  ngOnDestroy(): void {
       this.teamsSubscriber.unsubscribe();
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.teamsSubscriber = this.teamsService.doSubsToTeams().subscribe((teams: TeamModel[]) => {
      console.log({teams})
      const tmpArr: TeamMenuNode[] = [];
      teams.forEach((team) => {
        const tmpEntry: {name: string, children: any} = {
          name: team.name,
          children: [],
        }

        if(Array.isArray(team.projects)) {
          team.projects.forEach((project) => {
            tmpEntry.children.push({
              name: project.name,
              projectId: project.id,
              route: '/project'
            })
          })
        }

        tmpArr.push(tmpEntry);
      })

      this.dataSource.data = [...tmpArr];
    })

    this.teamsService.doRequestTeams();
  }

  doNavigate(nodeName: string): void {
    for(let parent of this.dataSource.data) {
      if(parent.children) {
        const node = parent.children.filter(node => node.name === nodeName);
        if(node[0]) {
          this.router.navigate([node[0].route, node[0].projectId]).catch(e => {
            throw e;
          })
          break;
        }
      }
    }
  }
}
