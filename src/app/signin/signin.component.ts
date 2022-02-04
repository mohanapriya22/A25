import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  name:string="nirmaan";
  salary:number=40000;
  roi=0.25;
  today=new Date();

  v:number=20;


  constructor() { }

  ngOnInit(): void {
  }

}
