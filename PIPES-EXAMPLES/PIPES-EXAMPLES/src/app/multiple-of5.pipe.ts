import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipleOf5'
})
export class MultipleOf5Pipe implements PipeTransform {

  transform(value: number): number {
    return value*5;
  }

}
