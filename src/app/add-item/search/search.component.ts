import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() getItem = new EventEmitter();

  constructor() { }
  search(searchStr: string) {
    this.getItem.emit(searchStr);
  }
  ngOnInit(): void {
  }

}
