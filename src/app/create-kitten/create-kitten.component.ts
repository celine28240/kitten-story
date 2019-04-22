import { Component, OnInit } from '@angular/core';
import{Kitten} from '../kitten';
import {KITTENS} from '../kitten';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {


  public name:string; // définit le type des propriétés
  public birthday:string;
  public type: string;
  public img:string;

  constructor() { }

  ngOnInit() {
  }
  
  public createKitten(){
    let my_kitten : Kitten = new Kitten();    //crée le chaton dans la liste globale
    my_kitten.name = this.name;
    my_kitten.birthday = this.birthday;         
    my_kitten.type = this.type;
    my_kitten.img = this.img;
    
    KITTENS.push(my_kitten);

  }
  
  
}
