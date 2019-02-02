import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConstantsService, TreeStruct } from '../constants.service';
import { FormControl, FormGroup } from '@angular/forms';
import { jsonValidator } from '../core/form/json-validator';

@Component({
  selector: 'app-textedit',
  templateUrl: './textedit.component.html',
  styleUrls: ['./textedit.component.css']
})
export class TexteditComponent implements OnInit {

  private _text:string;
  public form: FormGroup;
  public textedit: FormControl;
  @Output() change: EventEmitter<TreeStruct> = new EventEmitter();
  constructor(private constants:ConstantsService) { }

  ngOnInit() {
    this.text = JSON.stringify(this.constants.DEFAULT_TEXT, null, 2);
    this.textedit = new FormControl(this.text, [
      jsonValidator
    ])
    this.form = new FormGroup({
      'textedit': this.textedit
    });
  }

  public set text(text:string) {
    this._text = text;
  }

  public get text():string {
    return this._text;
  }

}
