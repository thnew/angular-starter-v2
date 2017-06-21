import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(value: string | number, args: string = "Seitenzahl"): string {
    return `${args}: ${value}`;
  }

}
