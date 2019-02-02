import { Component, OnInit, Input } from '@angular/core';
import { TreeStruct } from 'src/app/constants.service';

@Component({
  selector: 'app-tree-node-group',
  templateUrl: './tree-node-group.component.html',
  styleUrls: ['./tree-node-group.component.css']
})
export class TreeNodeGroupComponent implements OnInit {

  @Input() tree: TreeStruct;
  @Input() level?: number;

  constructor() { }

  ngOnInit() {
  }

}
