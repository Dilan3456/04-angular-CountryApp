import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute
    , private countriesService:CountriesService)
  {

  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe((params)=>{
      console.log({params: params['id']})
    })

  }
}
