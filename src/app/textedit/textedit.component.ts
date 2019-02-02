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

  @Output() change: EventEmitter<TreeStruct> = new EventEmitter();
  
  public textedit: FormControl;
  public form: FormGroup;
  
  constructor(private constants:ConstantsService) { }

  ngOnInit() {
    const text = JSON.stringify(this.constants.DEFAULT_TEXT, null, 2);
    this.textedit = new FormControl(text, [
      jsonValidator
    ])
    this.form = new FormGroup({
      'textedit': this.textedit
    });
    this.form.valueChanges.subscribe(this.onChanges.bind(this));
    this.onChanges();
  }

  private onChanges () {
    if (!this.textedit.invalid) {
      this.change.emit(this.textedit.value);
    }
  }

}
