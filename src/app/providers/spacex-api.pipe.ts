import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacexApi'
})
export class SpacexApiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
