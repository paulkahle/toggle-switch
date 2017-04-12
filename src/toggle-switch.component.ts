import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'supre-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  @Input('labelOn') labelOn: string;

  @Input('labelOff') labelOff: string;

  @Input('toggled') toggled: boolean;

  @Output() toggle = new EventEmitter();

  handleClick(e) {
    this.toggled = e.currentTarget.checked;
    this.toggle.emit(this.toggled);
  }

  constructor() { }

  ngOnInit() {
  }

}
