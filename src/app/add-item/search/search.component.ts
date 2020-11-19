import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchItem!: string;
  @Output() search = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
