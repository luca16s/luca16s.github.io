import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'glsfPhone',
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const pais = value.substring(0, 2);
    const ddd = value.substring(2, 4);
    const parte1 = value.substring(4, 9);
    const parte2 = value.substring(9, 13);

    return `+${pais} (${ddd}) ${parte1}-${parte2}`;
  }
}
