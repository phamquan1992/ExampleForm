import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputex';
  dt_value = '';
  ten_input = 'txt';
  array_num = [1, 2, 3, 4];
  change_value(gt: string) {
    this.dt_value = this.dt_value + gt;
  }
  payLoad: any;
htmlText='';

  FormData: any;
  DataForm: FormGroup = new FormGroup({});
  constructor() {
    this.DataForm = this.generateFormControls();
  }

  PreviewData() {
    this.payLoad = JSON.stringify(this.DataForm.getRawValue());
  }
  generateFormControls() {
    let tempGroup: FormGroup = new FormGroup({});
    this.array_num.forEach(element => {
      tempGroup.addControl('txt' + element, new FormControl(''));
    });
    return tempGroup;
  }
  add_input() {
    var new_value = Math.max(...this.array_num) + 1;
    this.array_num.push(new_value);
    this.DataForm.addControl('txt' + new_value, new FormControl(''));
  }
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
