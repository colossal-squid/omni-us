import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TreeStruct } from 'src/app/constants.service';

type TreeNodeType = 'boolean'|'object'|'number'|'string';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnChanges {

  @Input() node: number|string|boolean|TreeStruct;
  @Input() key?: string;
  @Input() level?: number;
  public nodeType: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.nodeType = typeof this.node;
  }

  get levelPrefix() {
    let prefix = new Array(this.level || 0).join('-');
    if (!!this.level) {
      prefix = '+' + prefix;
    }
    return prefix;
  }

  isLeaf(nodeType: TreeNodeType) {
    return nodeType !== 'object';
  }

  getInputType(nodeType: TreeNodeType) {
    switch (nodeType) {
      case 'boolean': return 'checkbox';
      case 'number' : return 'number';
      case 'string' : return 'text';
      default: console.warn(`No mapping for nodeType ${nodeType}`);
               return 'text';
    }
  }

}
