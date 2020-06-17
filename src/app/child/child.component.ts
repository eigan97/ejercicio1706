import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() ob;
  location:any;
  cObj: any;
  constructor() {
   }

  ngOnInit() {
    this.cObj = this.ob;
    this.location = this.ob.location.name
  }
  reset({location, name }){
    // this.location = this.ob.location.name
    this.ob.name = name;
    this.cObj.location.name = location.name;
  }
}