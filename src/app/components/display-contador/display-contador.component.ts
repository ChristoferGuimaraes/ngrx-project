import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  @Input() counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
