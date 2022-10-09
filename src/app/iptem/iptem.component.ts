import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iptem',
  templateUrl: './iptem.component.html',
  styleUrls: ['./iptem.component.css']
})
export class IptemComponent implements OnInit {
  // @Output() model = new EventEmitter<string>();
  @Input() data = '';
  constructor() { }

  ngOnInit(): void {
  }
  @Input() form!: FormGroup;
  key = '';
  value = '';
  // change_value(gt: string) {
  //   this.value = gt;
  //   this.set_value();
  // }
  // change_value2(gt: string) {
  //   this.key = gt;
  //   this.set_value();
  // }
  // set_value() {
  //   if (this.key != '' && this.value != '')
  //     this.model.emit('{' + this.key + ':' + this.value + '}');
  // }
}
