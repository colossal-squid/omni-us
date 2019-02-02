import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TreeStruct } from '../constants.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  @Input()
  public treeData: TreeStruct = {};

  constructor() { }

}
