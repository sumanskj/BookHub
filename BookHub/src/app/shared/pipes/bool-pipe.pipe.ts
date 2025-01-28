import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolPipe',
  standalone: false
})
export class BoolPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value ? 'Yes' : 'No';
  }

}
