import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteditComponent } from './textedit.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TexteditComponent', () => {
  let component: TexteditComponent;
  let fixture: ComponentFixture<TexteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexteditComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
