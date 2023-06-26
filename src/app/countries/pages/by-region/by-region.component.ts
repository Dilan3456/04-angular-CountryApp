import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  public countries:Country[] = [];
  constructor(private CountriesService:CountriesService){

  }

  searchByRegion(term:string):void{
    this.CountriesService.searchRegion(term).subscribe(
     countries => {
       this.countries= countries;
     }
    );

  }
}
