import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDisplay'
})
export class TodoDisplayPipe implements PipeTransform {

  transform(value: string): string {
    return value !== '' ? `you need to ${value}` : value;
  }
}
