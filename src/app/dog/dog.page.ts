import { Component, OnInit } from '@angular/core';
import {DogService } from '../Services/dog.service';    //To enable use of service 'DogService' on dog.page.html page


@Component({
  selector: 'app-dog',
  templateUrl: './dog.page.html',
  styleUrls: ['./dog.page.scss'],
})
export class DogPage implements OnInit {
  DogData: any[];
  

  constructor(private dogService:DogService) { }        //Declare private variable dogService of type DogService

  ngOnInit() {
    this.dogService.GetDogData().subscribe(             //call service using ngOnInit() lifecycle hook method via subscribe method
                                                        
      (data)=>{
        this.DogData = data.message;
                                                       //JSON data returned from API server and assigned to DogData              
      }
    );
  }
  
}
