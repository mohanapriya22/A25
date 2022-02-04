import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  n:string="hello nirmaan"

  numbers:number[]=[10,20,30,40,50];
  
   status:boolean=true;
  changeStatus()
  {
       this.status=!this.status;
  }

  name:string="mohana";
  num:number=100;
  imgurl:string="https://images.pexels.com/photos/8628302/pexels-photo-8628302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  
  test(data:string):void
{
   console.log("test is called", data);
}  
counter:number=1;
incval()
{
  this.counter++;
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
