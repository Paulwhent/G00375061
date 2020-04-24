import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';               //To allow local storage to be available via dependency injection framework

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  
  name:string;
  

  constructor(private storage:Storage) { }              // storage of type Storage added as argument

  onSave(){
    console.log(this.name);
    this .storage.set("name",this.name);                // save 'name' input to console into local storage as this.name value
  }

  ngOnInit() {
  }

}
