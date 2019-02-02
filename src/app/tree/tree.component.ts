import { Component, OnInit, Input } from '@angular/core';
import { TreeStruct } from '../constants.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input()
  treeData: TreeStruct = {};

  constructor() { }

  ngOnInit() {
  }

}
