import { Pipe, PipeTransform } from '@angular/core';
import { Location } from './location';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: Location): string {
    var result = '';
    if (value.street) result += `${value.street}, `;
    result += `${value.city}, `;
    if (value.postalcode) result += `${value.postalcode}, `;
    result += value.country;
    return result;
  }

}
