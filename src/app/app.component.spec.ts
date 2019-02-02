import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TexteditComponent } from './textedit/textedit.component';
import { TreeNodeComponent } from './tree/tree-node/tree-node.component';
import { TreeNodeGroupComponent } from './tree/tree-node-group/tree-node-group.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent,
        TreeComponent,
        TexteditComponent,
        TreeNodeComponent,
        TreeNodeGroupComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
