import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): string {
    if (!value) return '';
    if (value.length <= 20) return value;
    return `${value.substring(0,20)}...`;
  }

}
