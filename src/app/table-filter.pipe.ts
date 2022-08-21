import { Pipe, PipeTransform } from '@angular/core';
import { ContainerFormList } from './models/root';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list:ContainerFormList[],value:string) {
    return value? list.filter(item=>item.containerNumber.toLowerCase().includes(value.toLowerCase())):list;
  }

}
