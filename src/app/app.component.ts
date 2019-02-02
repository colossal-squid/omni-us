import { Component } from '@angular/core';
import { TreeStruct } from './constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public treeData: TreeStruct = {};

  public onTextChange(text: string) {
    if (typeof text === 'string') {
      this.treeData = JSON.parse(text) as TreeStruct;
    }
  }

}
