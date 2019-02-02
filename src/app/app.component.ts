import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TreeStruct } from './constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  public treeData: TreeStruct = {};
  
  public onTextChange(text:string) {
    this.treeData = <TreeStruct>JSON.parse(text);
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
