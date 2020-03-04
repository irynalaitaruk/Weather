import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(cityList, searchStr: string) {
    console.log('Filter pipe started')
    
    if(cityList.length === 0 || searchStr === ''){
      return cityList;
    }
    return cityList.filter((city) => city.cityName.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
