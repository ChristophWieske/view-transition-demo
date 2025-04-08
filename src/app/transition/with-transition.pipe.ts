import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'withTransition'
})
export class WithTransitionPipe<T> implements PipeTransform {

  transform<T>(value: T): T {
    return value;
  }

}
