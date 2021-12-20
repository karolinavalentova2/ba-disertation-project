import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {Router} from "@angular/router";


interface ClickableMenuNode {
  name: string;
  projectId: number;
  route: string;
}
interface TeamMenuNode {
  name: string;
  children?: ClickableMenuNode[];
}

const TREE_DATA: TeamMenuNode[] = [
  {
    name: 'Iglass',
    children: [
      {name: 'John', projectId: 1, route: '/project'},
      {name: 'Karolina', projectId: 2, route: '/project'},
      {name: 'Peter', projectId: 4, route: '/project'},
    ],
  },
  {
    name: 'Azzure',
    children: [
      {name: 'John', projectId: 1, route: '/project'},
      {name: 'Karolina', projectId: 2, route: '/project'},
      {name: 'Peter', projectId: 4, route: '/project'},
    ],
  },
  {
    name: 'JetBrains',
    children: [
      {name: 'John', projectId: 1, route: '/project'},
      {name: 'Karolina', projectId: 2, route: '/project'},
      {name: 'Peter', projectId: 4, route: '/project'},
    ]
  },
];

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
export class TeamsComponent implements OnInit {

  private _transformer = (node: TeamMenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

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

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  doNavigate(nodeName: string): void {
    for(let parent of TREE_DATA) {
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
