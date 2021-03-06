import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  receivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    




    this.ds.makeAHttpReq().subscribe((result)=>{
      // console.log(result);
      this.receivedData=result;
    })
  }

}
