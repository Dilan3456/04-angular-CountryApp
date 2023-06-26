import { Component, ElementRef, EventEmitter, Input , Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  @Output()
  public onValue:EventEmitter<string>= new EventEmitter();

  @Input()
  public placeholder:string ="";

  public value:string="";
 activateFunction():void
 {
   this.value= this.tagInput.nativeElement.value;
  this.onValue.emit(this.value);
 }
}
