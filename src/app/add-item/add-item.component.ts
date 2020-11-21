import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent{
  list: string[] = [];
  searchItem = "";
  constructor() { };
  
  addItem(elem: string) {
    this.list.push(elem);
  }

  getItem(searchStr: string) {
    this.searchItem = searchStr;
  }
}
