import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeGroupComponent } from './tree-node-group.component';

describe('TreeNodeGroupComponent', () => {
  let component: TreeNodeGroupComponent;
  let fixture: ComponentFixture<TreeNodeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
