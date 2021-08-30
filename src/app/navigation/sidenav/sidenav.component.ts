import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }

}
