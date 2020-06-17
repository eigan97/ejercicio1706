import { Component, VERSION, OnInit} from '@angular/core';
import { RequestServiceService } from './request-service.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  characterList: any;
  constructor(private reqService: RequestServiceService){
    
  }

  ngOnInit(){
    this.reqService.allCharacter().subscribe(response => {
      this.characterList = response;
    });
  }

}
