import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';             //To enable use of device local storage

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  dogname:string;

  constructor(private storage:Storage) { }          // storage of type Storage added as argument

  ngOnInit() {
    this.storage.get("name").then(                  // get 'name' from local storage 
    
    (data)=>
    {
      this.dogname=data;                            // save 'name' input to console into local storage as this.name value
    }
    
    ).catch(

    (error)=>{   

      console.log(error)
    
    }
    );
}
}