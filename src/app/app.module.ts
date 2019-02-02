import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TexteditComponent } from './textedit/textedit.component';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree/tree-node/tree-node.component';
import { TreeNodeGroupComponent } from './tree/tree-node-group/tree-node-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TexteditComponent,
    TreeComponent,
    TreeNodeComponent,
    TreeNodeGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
