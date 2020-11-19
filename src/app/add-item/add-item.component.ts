import { Component} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent{
  
  inputValue = ''
  list: string[] = []
  constructor() { };
  
  addItem(elem: string) {
    console.log(this.list)
    this.list.push(elem);
  }
}
